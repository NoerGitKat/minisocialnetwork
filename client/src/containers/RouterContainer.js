import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import jwt_decode from "jwt-decode";
import setAuthToken from "./../utils/setAuthToken";
import { setCurrentUser, logOut } from "./../actions/authAction";
import store from "./../store";

import RegisterContainer from "./RegisterContainer";
import LoginContainer from "./LoginContainer";
import NavbarContainer from "./NavbarContainer";
import Footer from "../components/layout/Footer";
import LandingContainer from "./LandingContainer";
import DashboardContainer from "./DashboardContainer";

import "../App.css";

if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set current user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  //Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logOut());
    // TODO: Clear current Profile

    //Redirect to login
    window.location.href = "/login";
  }
}

class RouterContainer extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <NavbarContainer />
            <Route exact path="/" component={LandingContainer} />
            <div className="container">
              <Route exact path="/dashboard" component={DashboardContainer} />
              <Route exact path="/register" component={RegisterContainer} />
              <Route exact path="/login" component={LoginContainer} />
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default RouterContainer;
