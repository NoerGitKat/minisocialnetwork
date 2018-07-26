import React from "react";
import { connect } from "react-redux";
import Navbar from "./../components/layout/Navbar";
import { logOut } from "./../actions/authAction";

class NavbarCompose extends React.Component {
  render() {
    return <Navbar {...this.props} />;
  }
}

const mapStateToProps = state => {
  const { isAuthenticated, user } = state.auth;
  return {
    isAuthenticated,
    user
  };
};

const mapDispatchToProps = dispatch => ({
  logOut: () => {
    dispatch(logOut());
  }
});

const NavbarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavbarCompose);

export default NavbarContainer;
