import React from "react";
import { connect } from "react-redux";
import { loginUser } from "./../actions/authAction";
import { withRouter } from "react-router-dom";

import Login from "./../components/auth/Login";

class LoginCompose extends React.Component {
  state = {
    email: "",
    password: "",
    // errors: {},
    onSubmit: e => {
      e.preventDefault();

      const user = {
        email: this.state.email,
        password: this.state.password
      };

      const { loginUser, history } = this.props;
      loginUser(user, history);
    },
    onChange: e => {
      this.setState({ [e.target.name]: e.target.value });
    }
  };

  render() {
    return <Login {...this.state} {...this.props} />;
  }
}

const mapStateToProps = state => {
  const { isAuthenticated, user } = state.auth;
  const { errors } = state.errors;
  return {
    isAuthenticated,
    user,
    errors
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loginUser: (userData, history) => {
      dispatch(loginUser(userData, history));
    }
  };
};

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginCompose);

export default withRouter(LoginContainer);
