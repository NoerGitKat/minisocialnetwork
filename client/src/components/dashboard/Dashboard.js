import React from "react";
import PropTypes from "prop-types";
import Spinner from "./../common/Spinner";
import { Link } from "react-router-dom";

const Dashboard = ({ profile, user, loading }) => {
  console.log("user", user);
  let dashboardContent;
  if (profile == null || loading) {
    dashboardContent = <Spinner />;
  } else {
    if (Object.keys(profile).length > 0) {
      // Check if logged in user has profile data
      dashboardContent = <h4>TODO: DISPLAY PROFILE</h4>;
    } else {
      // Logged in user has no profile
      dashboardContent = (
        <div>
          <p className="lead text-muted">Welcome, {user.name}!</p>
          <p>You have not yet setup a profile, please add some info</p>
          <Link className="btn btn-lg btn-info" to="/create-profile">Create profile</Link>
        </div>
      );
    }
  }

  return (
    <div id="dashboard">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="display-4">Dashboard</h1>
            {dashboardContent}
          </div>
        </div>
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  profile: PropTypes.obj,
  user: PropTypes.obj,
  loading: PropTypes.bool
};

export default Dashboard;
