import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../store/session";

function DemoLogin() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("demo@demo.com");
  const [password, setPassword] = useState("password");

  const handleLogin = (event) => {
    event.preventDefault();
    // Dispatch the login action with the demo user data
    dispatch(login({ credential: email, password }));
  };

  return (
    <form onSubmit={handleLogin}>
      <button type="submit">Login with demo account</button>
    </form>
  );
}

export default DemoLogin;



// import React from "react";
// import { useState } from "react";
// import { login } from "../../store/session";

// function DemoLogin() {
//     const [email, setEmail] = useState('demo@demo.com');
//     const [password, setPassword] = useState('password');
  
//     const handleLogin = (event) => {
//       event.preventDefault();
//       login(email, password);
//     };
  
//     return (
//       <form onSubmit={handleLogin}>
//         <button type="submit">Login with demo account</button>
//       </form>
//     );
//   }
  
//   export default DemoLogin;