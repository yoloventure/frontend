import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./index.css";


import App from "./app";

ReactDOM.render(
  <Router>
    <Route path="/" component={App} />
  </Router>,

  document.getElementById("root")
);
