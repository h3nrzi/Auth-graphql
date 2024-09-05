import React from "react";
import { graphql } from "react-apollo";
import { user } from "../../api/queries";
import { hashHistory } from "react-router";

class HomePage extends React.Component {
  componentDidMount() {
    if (this.props.data.user) return hashHistory.push("/dashboard");
  }

  render() {
    return (
      <div>
        <h3>Home</h3>
        <p>👋🏻 Welcome!</p>
      </div>
    );
  }
}

export default graphql(user)(HomePage);
