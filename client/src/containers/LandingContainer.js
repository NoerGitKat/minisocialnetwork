import React from "react";
import { connect } from "react-redux";
import Landing from "./../components/layout/Landing";
import { withRouter } from "react-router-dom";

class LandingCompose extends React.Component {
  componentDidMount() {
    const { isAuthenticated, history } = this.props;
    if (isAuthenticated) {
      history.push("/dashboard");
    }
  }

  render() {
    return <Landing {...this.props} />;
  }
}

const mapStateToProps = state => {
  const { isAuthenticated, history } = state.auth;
  return { isAuthenticated, history };
};

const mapDispatchToProps = dispatch => ({});

const LandingContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(LandingCompose));

export default LandingContainer;
