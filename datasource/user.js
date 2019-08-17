const { DataSource } = require('apollo-datasource');
const autoBind = require('auto-bind');

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
    return await models.User.findOne({
      where: { id: userId }
    });
  }
}
module.exports = User;