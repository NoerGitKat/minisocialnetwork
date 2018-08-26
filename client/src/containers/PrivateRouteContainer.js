import React from "react";
import { connect } from "react-redux";
import PrivateRoute from "./../components/common/PrivateRoute";

class PrivateRouteCompose extends React.Component {
  render() {
    return <PrivateRoute {...this.props} />;
  }
}

const mapStateToProps = state => {
  const { isAuthenticated } = state.auth;
  return {
    isAuthenticated
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

const PrivateRouteContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PrivateRouteCompose);

export default PrivateRouteContainer;
