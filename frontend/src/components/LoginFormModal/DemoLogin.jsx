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
    dispatch(login({ credential: "demo2@demo.com", password }));
  };

  return (
    <>
    <form onSubmit={demoLogin1}>
      <button type="submit">Login as demo user</button>
    </form>
    <br/>
    </>
  );
}

export default DemoLogin;