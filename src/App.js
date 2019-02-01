import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div id="appDiv">
          <Header />
          <Route path="/" exact={true} component={Home} />
        </div>
      </Router>
    );
  }
}

export default App;
 