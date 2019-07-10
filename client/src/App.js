import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Landing from "./components/layout/Landing";
import About from "./components/layout/About";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Music from "./components/layout/Music";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="xylo-app">
          <Route exact path="/" component={Landing} />
          <Route exact path="/about" component={About} />
          <Route exact path="/music" component={Music} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </div>
      </Router>
    );
  }
}

export default App;
