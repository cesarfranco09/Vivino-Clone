import React from "react";
import { Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Homepage/Home"
import DetailWine from "./components/Wine/DetailWine";
import Footer from "./components/Footer"
import './app.css'
import ExploreWine from "./components/Wine/ExploerWine";
import Cart from "./components/cart/Cart";

function App() {
  return (
    <div>
      <Navigation />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/wines'>
          <ExploreWine/>
        </Route>
        <Route exact path='/wine'>
          <DetailWine/>
        </Route>
      </Switch>
      {/* <Cart /> */}
      <Footer/>
    </div>
  );
}

export default App;
