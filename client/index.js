import React from "react";
import ReactDOM from "react-dom";

import ApolloClient, { createNetworkInterface } from "apollo-client";
import { ApolloProvider } from "react-apollo";

import { Router, Route, hashHistory, IndexRoute } from "react-router";
import AppLayout from "./components/Layout/AppLayout";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import signupPage from "./components/pages/SignupPage";
import PrivateLayout from "./components/Layout/PrivateLayout";
import DashboardPage from "./components/pages/DashboardPage";

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
      <Router history={hashHistory}>
        <Route path="/" component={AppLayout}>
          <IndexRoute component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={signupPage} />
          <Route path="" component={PrivateLayout}>
            <Route path="/dashboard" component={DashboardPage} />
          </Route>
        </Route>
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector("#root"));
