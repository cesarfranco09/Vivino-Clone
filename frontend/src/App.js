import React from "react";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import SignupFormModal from "./components/SignupFormModal";
// import LoginFormPage from "./components/LoginFormPage";
import Navigation from "./components/Navigation";
import Home from "./components/Homepage/Home"
import './app.css'

function App() {
  return (
    <div className="container">
      <Navigation />
      <Home />

      <Switch>
        <Route path="/signup">
          <SignupFormPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
