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
    },
    async updatePost(_, args, { models}) {
      const post = await models.Post.findOne({
        where: { id: args.postId }
      });
      if (post) {
        post.update(args);
      }
      return post;
    },
    async deletePost(_, {postId}, { models }) {
      const post = await models.Post.findOne({where: {id: postId }});
      if (post) {
        const deleted = post.destroy();
        if (deleted) {
          return {
            message: 'Post deleted'
          }
        }
      }
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
