module.exports = {
  Mutation: {
    async createNewComment(_, { userId, postId, comment }, { models }) {
      return models.Comment.create({
        userId, postId, comment
      });
    }
  },
  Comment: {
    author(comment) {
      return comment.getAuthor();
    }
  }

}