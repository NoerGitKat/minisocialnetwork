import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

// Action creators
import { registerUser } from "./../actions/authAction";

import Register from "./../components/auth/Register";

class RegisterCompose extends React.Component {
  state = {
    name: "",
    email: "",
    password: "",
    password2: "",
    // errors: {},
    onChange: e => {
      this.setState({ [e.target.name]: e.target.value });
    },
    onSubmit: e => {
      e.preventDefault();

      const newUser = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        password2: this.state.password2
      };

      const { registerUser, history } = this.props;
      registerUser(newUser, history);
    }
  };

  componentDidMount() {
    const { isAuthenticated, history } = this.props;
    if (isAuthenticated) {
      history.push("/dashboard");
    }
  }

  render() {
    return <Register {...this.state} {...this.props} />;
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
    registerUser: (userData, history) => {
      dispatch(registerUser(userData, history));
    }
  };
};

const RegisterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(RegisterCompose));

export default RegisterContainer;
