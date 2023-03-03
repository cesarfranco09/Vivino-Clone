import React from "react";
import { Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Homepage/Home"
import './app.css'

function App() {
  return (
    <div className="container">
      <Navigation />
      <Home />
    </div>
  );
}

export default App;
