module.exports = {
  Query: {
    async getAllPosts(_, __, { models }) {
      return models.Post.findAll();
    },
    async getPostById(_, { postId }, { models }) {
      return models.Post.findOne({ where: { id: postId } });
    }
  },
  Mutation: {
    async createNewPost(_, {title, userId, content}, { models }) {
      return models.Post.create({
        title,
        userId,
        content
      });
    }
  },
 Post: {
   comments(post) {
     return post.getComments();
   },
   author(post) {
     return post.getAuthor();
   }
 }

};
