import React from "react";
import { user } from "../../api/queries";
import { graphql } from "react-apollo";
import { hashHistory } from "react-router";

class PrivateLayout extends React.Component {
  componentDidMount() {
    if (!this.props.data.loading && !this.props.data.user) return hashHistory.push("/login");
  }

  componentWillUpdate(nextProps) {
    if (!nextProps.data.loading && !nextProps.data.user) return hashHistory.push("/login");
  }

  render() {
    return <div>{this.props.children}</div>;
  }
}

export default graphql(user)(PrivateLayout);
