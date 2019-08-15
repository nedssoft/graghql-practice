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

  }

  type createPostResponse {
    id: Int
    title: String
    content: String
    author: User
  }
`;

module.exports = postType;
