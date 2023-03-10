import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../../store/session";

function DemoLogin() {
  const dispatch = useDispatch();
  const email = "demo@demo.com";
  const password = "password";

  const demoLogin = (event) => {
    event.preventDefault();
    // Dispatch the login action with the demo user data
    dispatch(login({ credential: email, password }));
  };

  return (
    <form onSubmit={demoLogin}>
      <button type="submit">Log in with demo account</button>
    </form>
  );
}

export default DemoLogin;