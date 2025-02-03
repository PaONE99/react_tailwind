import React, { useState } from "react";
import Login from "../Pages/Login"; // Adjust the path to the correct one


function LoginHandler({ setIsLoggedIn }) {
  const handleLogin = (email, password) => {
    // Dummy credentials check
    if (email === "test@example.com" && password === "password123") {
      setIsLoggedIn(true); // Set to logged in
    } else {
      alert("Invalid credentials"); // Show alert if invalid
    }
  };

  return <Login onLogin={handleLogin} />;
}

export default LoginHandler;
