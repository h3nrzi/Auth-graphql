const { GraphQLSchema } = require("graphql");
const query = require("./types/rootQueryType");
const mutation = require("./mutation");

const schema = new GraphQLSchema({
  query,
  mutation
});

module.exports = schema;
