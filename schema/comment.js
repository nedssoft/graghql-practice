const { gql } = require("apollo-server-express");

const commentType = gql`
  type Comment {
    userId: Int!
    postId: Int!
    comment: String!
    post: Post!
    author: User!
  }

  type Mutation {
    createNewComment(
      userId: Int!
      postId: Int!
      comment: String!
    ): createCommentResponse
  }

  type createCommentResponse {
    userId: Int
    postId: Int
    comment: String
  }
`;

module.exports = commentType;
