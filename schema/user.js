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
`
module.exports = userType;