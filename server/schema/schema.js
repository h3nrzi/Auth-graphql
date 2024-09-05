const { GraphQLSchema } = require("graphql");
const RootQueryType = require("./types/rootQueryType");

module.exports = new GraphQLSchema({
  query: RootQueryType
});
