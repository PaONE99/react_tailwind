import React, { useState } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter
import LoginHandler from "./security/LoginHandler"; // Import LoginHandler component
import HomePage from "./Pages/HomePage"; // Import HomePage component

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // State to track login status

  return (
    <BrowserRouter> {/* Wrap your app with BrowserRouter */}
      <div className="flex justify-center items-center h-screen bg-gray-100">
        {!isLoggedIn ? (
          <LoginHandler setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <HomePage />
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
