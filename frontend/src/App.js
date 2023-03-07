import React from "react";
import { Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Homepage/Home"
import ExploreWine from "./components/Wine/ExploreWine";
import './app.css'
import TestComponent from "./components/test/TestComponent";

function App() {
  return (
    <div className="container">
      <Navigation />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/wines'>
          <ExploreWine/>
        </Route>

      </Switch>
    </div>
  );
}

export default App;
