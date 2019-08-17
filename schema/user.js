const { gql } = require("apollo-server-express");

const userType = gql`
  type Query {
    getAllUsers: [User!]!
    getUserById(userId: Int!): User
  }
  type User {
    name: String!
    email: String!
    posts: [Post!]!
  }
  type Mutation {
    registerUser(
      name: String!
      email: String!
      password: String
    ): RegisterResponse
    loginUser(email: String!, password: String!): LoginResponse
  }

  type RegisterResponse {
    id: Int
    name: String
    email: String
  }
  type LoginResponse {
    id: Int
    name: String
    email: String
    token: String
  }
`;
module.exports = userType;
