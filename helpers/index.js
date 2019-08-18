const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
dotenv.config();
const models = require("../database/models");
const { SECRET } = process.env;

const generateHash = password => {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);
  return hash;
};

const generateToken = payload => {
  const token = jwt.sign(payload, SECRET, { expiresIn: "24h" });
  return token;
};

const decodeToken = async token => {
  try {
    const decoded = await jwt.verify(token, SECRET);
    if (decoded) {
      return decoded;
    }
    return null;
  } catch (error) {
    throw new Error(error.message);
  }
};

const verifyUserToken = async token => {
  try {
    if (!token) return null;
    const { __uuid } = await decodeToken(token);
    const user = await models.User.findOne({ where: { id: __uuid } });
    if (user) {
      const { password, ...returnedData } = user.get();
      return returnedData;
    }
    return null;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  generateHash,
  generateToken,
  decodeToken,
  verifyUserToken
};
