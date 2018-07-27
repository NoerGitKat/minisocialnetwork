import React from "react";
import PropTypes from "prop-types";
import TextFieldGroup from "./../common/TextFieldGroup";

const Login = ({ email, password, errors, onSubmit, onChange }) => {
  return (
    <div className="login">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Log In</h1>
            <p className="lead text-center">
              Sign in to your DevConnector account
            </p>
            <form onSubmit={onSubmit}>
              <TextFieldGroup
                type="email"
                className="form-control form-control-lg"
                placeholder="Email Address"
                name="email"
                value={email}
                onChange={onChange}
              />
              {errors ? errors.email : <div />}

              <TextFieldGroup
                type="password"
                className="form-control form-control-lg"
                placeholder="Password"
                name="password"
                value={password}
                onChange={onChange}
              />
              {errors ? errors.password : <div />}

              <input type="submit" className="btn btn-info btn-block mt-4" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
  errors: PropTypes.object,
  onSubmit: PropTypes.func,
  onChange: PropTypes.func
};

export default Login;
