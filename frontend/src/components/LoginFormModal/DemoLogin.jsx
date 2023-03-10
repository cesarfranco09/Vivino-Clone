import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../../store/session";

function DemoLogin() {
  const dispatch = useDispatch();
  const password = "password";

  const demoLogin1 = (event) => {
    event.preventDefault();
    // Dispatch the login action with the demo user data
    dispatch(login({ credential: "demo@demo.com", password }));
  };

  const demoLogin2 = (event) => {
    event.preventDefault();
    // Dispatch the login action with the demo user data
    dispatch(login({ credential: "troll@wine.com", password }));
  };

  return (
    <>
    <form onSubmit={demoLogin1}>
      <button type="submit">Log in with demo 1</button>
    </form>
    <br/>
    <form onSubmit={demoLogin2}>
        <button type="submit">Log in with demo 2</button>
    </form>
    </>
  );
}

export default DemoLogin;