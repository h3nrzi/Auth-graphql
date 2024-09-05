import React, { Component } from "react";
import AuthForm from "../AuthForm";
import { graphql } from "react-apollo";
import { login } from "../../api/mutations";
import { user } from "../../api/queries";
import { hashHistory } from "react-router";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = { errors: [] };
  }

  handleLogin(email, password) {
    const { mutate } = this.props;

    mutate({
      variables: { email, password },
      refetchQueries: [{ query: user }]
    })
      .then(() => {
        this.setState({ errors: [] });
      })
      .catch((err) => {
        const errors = err.graphQLErrors.map((error) => error.message);
        this.setState({ errors });
      });
  }

  componentDidMount() {
    if (this.props.data.user) hashHistory.push("/dashboard");
  }

  componentWillUpdate(nextProps) {
    if (!this.props.data.user && nextProps.data.user) hashHistory.push("/dashboard");
  }

  render() {
    const { errors } = this.state;

    return (
      <div>
        <h3>Log In</h3>
        <AuthForm btnLabel="Login" errors={errors} onSubmit={this.handleLogin.bind(this)} />
      </div>
    );
  }
}

export default graphql(user, {
  name: "data"
})(
  graphql(login, {
    name: "mutate"
  })(LoginPage)
);
