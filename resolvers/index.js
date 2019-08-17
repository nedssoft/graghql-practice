const { mergeResolvers } = require('merge-graphql-schemas');

const userResolver = require('./user')
const postResolver = require('./post')
const commentResolver = require('./comment')


module.exports = mergeResolvers([
  userResolver,
  postResolver,
  commentResolver
]);