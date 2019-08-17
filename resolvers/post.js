module.exports = {
  Query: {
    async getAllPosts(_, __, { dataSources: { Post }  }) {

      return await Post.getAllPosts();
    },
    async getPostById(_, { postId }, { dataSources: {Post}  }) {
      return Post.getPostById({ postId } );
    }
  },
  Mutation: {
    async createNewPost(_, { title, userId, content}, { dataSources: {Post}  }) {
      return Post.createNewPost({
        title,
        userId,
        content
      });
    },
    async updatePost(_, args, { dataSources: {Post } }) {
      return await Post.updatePost(args);
      
    },
    async deletePost(_, { postId }, { dataSources: {Post}  }) {
      return await Post.deletePost({postId });
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
