import React from "react";
import ReactDOM from "react-dom";

import ApolloClient, { createNetworkInterface } from "apollo-client";
import { ApolloProvider } from "react-apollo";

const networkInterface = createNetworkInterface({
  uri: "/graphql",
  opts: { credentials: "same-origin" }
});

const client = new ApolloClient({
  dataIdFromObject: (obj) => obj.id,
  networkInterface
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <div>Auth Starter</div>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector("#root"));
