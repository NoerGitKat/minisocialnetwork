import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./../store";

import RegisterContainer from "./RegisterContainer";
import LoginContainer from "./LoginContainer";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Landing from "../components/layout/Landing";

import "../App.css";

class RouterContainer extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />
            <div className="container">
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
