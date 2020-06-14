import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./index.css";
import * as serviceWorker from './serviceWorker';

import App from "./App";

ReactDOM.render(
  (
  <Router>
      <Route path="/" component={App}/>
  </Router>

  )
  , document.getElementById("root")

);
serviceWorker.unregister();
