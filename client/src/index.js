import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import RouterContainer from "./containers/RouterContainer";
import registerServiceWorker from "./registerServiceWorker";

const appRoot = document.getElementById("root");

ReactDOM.render(<RouterContainer />, appRoot);
registerServiceWorker();
