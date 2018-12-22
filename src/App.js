import React, { Component } from "react";
import "./App.css";
import RouterComponent from "./components/router/RouterComponent";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <RouterComponent />
      </React.Fragment>
    );
  }
}

export default App;
