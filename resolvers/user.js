module.exports = {
  Query: {
    async getAllUsers(_, __, { dataSources: { User } }) {
      return await User.getAllUsers();
    },
    async getUserById(_, { userId }, { dataSources: { User } }) {
      return await User.getUserByI({ userId });
    }
  },
  User: {
    posts(user) {
      return user.getPosts();
    }
  },
  Mutation: {
    async registerUser(_, args, { dataSources: { User }}) {
      return await User.registerUser(args);
    },
    async loginUser(_, args, { dataSources: { User } }) {
      return await User.loginUser(args);
    }
  }
};
