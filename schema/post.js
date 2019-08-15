const { gql } = require("apollo-server-express");

const postType = gql`
  type Query {
    getAllPosts: [Post!]!
    getPostById(postId: Int!): Post
  }

  type Post {
    id: Int!
    title: String!
    userId: Int!
    content: String!
    author: User!
    comments: [Comment!]!
  }

  type Mutation {
    createNewPost(
      title: String
      userId: Int!
      content: String!
    ): createPostResponse
    
    updatePost(
      postId: Int!
      title: String
      content: String
      userId: Int
    ): updatePostResponse

    deletePost(postId: Int!): deletePostResponse
  }

  type updatePostResponse {
    id: Int
    title: String
    content: String
  }
  type createPostResponse {
    id: Int
    title: String
    content: String
    author: User
  }
  type deletePostResponse {
    message: String!
  }
`;

module.exports = postType;
