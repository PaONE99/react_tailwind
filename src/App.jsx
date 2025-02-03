import React, { useState } from "react";
import "./App.css";
import LoginHandler from "./security/LoginHandler"; // Import LoginHandler component
import HomePage from "./Pages/HomePage"; // Import HomePage component

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      {!isLoggedIn ? (
        <LoginHandler setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <HomePage />
      )}
    </div>
  );
}

export default App;
