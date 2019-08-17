const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");
const typeDefs = require("../schema");
const resolvers = require("../resolvers");
const models = require("../database/models");
const UserApi = require("../datasource/user");
const PostApi = require("../datasource/post");

const app = express();


const dataSources = () => ({
  User: new UserApi(),
  Post: new PostApi(),
});

const context = {
  models
};
// Construct a schema, using GraphQL schema language
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
  introspection: true,
  playground: true,
  context,
  engine: {
    apiKey: process.env.ENGINE_API_KEY
  }
});
server.applyMiddleware({ app });

module.exports = {
  app,
  graphqlPath: server.graphqlPath
};
