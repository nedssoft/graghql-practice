const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const typeDefs = require('../schema')
const resolvers = require('../resolvers')
const models = require('../database/models');
const app = express()    

// Construct a schema, using GraphQL schema language
const server = new ApolloServer({ typeDefs, resolvers, context: { models } });
server.applyMiddleware({ app });

module.exports = {
  app,
  graphqlPath: server.graphqlPath
}