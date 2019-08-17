const { DataSource } = require('apollo-datasource');
const autoBind = require('auto-bind');

class Post extends DataSource {
  constructor() {
    super();
    autoBind(this);
  }

  initialize({ context }) {
    this.models = context.models;
  }

  async getAllPosts() {
    return await this.models.Post.findAll();
  }

  async getPostById({ postId }) {
    return await this.models.Post.findOne({
      where: { id: postId }
    });
  }

  async createNewPost(postData) {
    try {
      return this.models.Post.create(postData);
    } catch (error) {
      throw new Error(error.message);
    }
  }
  async updatePost(postData) {
    try {
      const post = await this.models.Post.findOne({
        where: { id: postData.postId }
      });
      if (post) {
        post.update(postData);
      }
      return post;
    } catch (error) {
      throw new Error(error.message);
    }
  }
  async deletePost({postId}) {
    const post = await this.models.Post.findOne({where: {id: postId }});
    if (post) {
      const deleted = post.destroy();
      if (deleted) {
        return {
          message: 'Post deleted'
        }
      }
    }
  }
}
module.exports = Post;