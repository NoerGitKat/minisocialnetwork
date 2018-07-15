import React from "react";

import Login from "./../components/auth/Login";

class LoginContainer extends React.Component {
  state = {
    email: "",
    password: "",
    errors: {},
    onSubmit: e => {
      e.preventDefault();

      const user = {
        email: this.state.email,
        password: this.state.password
      };

      console.log(user);
    },
    onChange: e => {
      this.setState({ [e.target.name]: e.target.value });
    }
  };

  render() {
    return <Login {...this.state} />;
  }
}

export default LoginContainer;
