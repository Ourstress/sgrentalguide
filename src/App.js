import React, { Component } from "react";
import "./App.css";
import { items } from "./data/rental.js";
import CategoryPage from "./components/categoryPage/CategoryPage";

class App extends Component {
  render() {
    return (
      <main>
        <CategoryPage items={items} />
      </main>
    );
  }
}

export default App;
