import React from "react";
import { connect } from "react-redux";
import Dashboard from "./../components/dashboard/Dashboard";
import { getCurrentProfile } from "./../actions/profileAction";

class DashboardCompose extends React.Component {
  componentDidMount() {
    const { getCurrentProfile } = this.props;
    getCurrentProfile();
  }

  render() {
    return <Dashboard {...this.props} />;
  }
}

const mapStateToProps = state => {
  const { profile } = state.profile;
  const { user } = state.auth;
  return {
    profile,
    user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCurrentProfile: () => {
      dispatch(getCurrentProfile());
    }
  };
};

const DashboardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardCompose);

export default DashboardContainer;
