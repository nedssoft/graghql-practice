const { DataSource } = require("apollo-datasource");
const { generateHash, generateToken, decodeToken } = require('../helpers')
const autoBind = require("auto-bind");
const bcrypt = require('bcrypt');
class User extends DataSource {
  constructor() {
    super();
    autoBind(this);
  }

  initialize({ context }) {
    this.models = context.models;
  }

  async getAllUsers() {
    return await this.models.User.findAll();
  }

  async getUserById({ userId }) {
    return await this.models.User.findOne({
      where: { id: userId }
    });
  }

  async registerUser(userData) {
    const hashedPassword = generateHash(userData.password);
    return await this.models.User.create({
      ...userData,
      password: hashedPassword
    });
  }

  async loginUser(userData) {
    const user = await this.models.User.findOne({
      where: { email: userData.email }
    });
    if (user) {
      const isMatched = bcrypt.compareSync(userData.password, user.password);
      if (isMatched) {
        const token = generateToken({__uuid: user.id });
        return { id: user.id, email: user.email, name: user.name, token };
      }
      throw new Error('User not found');
    }
  }
}

module.exports = User;
