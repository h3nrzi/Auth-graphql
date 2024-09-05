const { GraphQLObjectType, GraphQLString } = require("graphql");
const UserType = require("./types/userType");
const authService = require("../services/auth");

const mutation = new GraphQLObjectType({
  name: "Mutations",
  fields: {
    signup: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      resolve: (parentValue, args, req) => {
        const { email, password } = args;
        return authService.signup(email, password, req);
      }
    },

    logout: {
      type: UserType,
      resolve: (parentValue, args, req) => {
        const { user } = req;
        req.logout();
        return user;
      }
    },

    login: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      resolve: (parentValue, args, req) => {
        const { email, password } = args;
        return authService.login(email, password, req);
      }
    }
  }
});

module.exports = mutation;
