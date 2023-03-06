import React from "react";
import { Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Homepage/Home"
import './app.css'
import TestComponent from "./components/test/TestComponent";

function App() {
  return (
    <div className="container">
      <Navigation />
      <Home />
    </div>
  );
}

export default App;
