module.exports = {
  Query: {
    async getAllUsers(_, __, { models }) {
      return await models.User.findAll();
    },
    async getUserById(_, { userId }, { models }) {
      return await models.User.findOne({
        where: { id: userId }
      });
    }
  },
  User: {
    posts(user) {
      return user.getPosts();
    }
  }
};
