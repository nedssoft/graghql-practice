const { mergeTypes } = require("merge-graphql-schemas");

const postType = require("./post");
const commentType = require("./comment");
const userType = require("./user");

module.exports = mergeTypes([userType, postType, commentType]);
