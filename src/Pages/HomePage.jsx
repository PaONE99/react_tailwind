import React from "react";

import Navbar from "../Pages/Navbar"; // Import Navbar
import AboutPage from "../Pages/AboutPage"; // Import AboutPage
import CardComponent from "../components/CardComponent ";
import ButtonComponent from "../components/ButtonComponent";
import GridComponent from "../components/GridComponent";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      {/* Add Navbar to the top of the page */}
      <Navbar />
      
      <GridComponent>
        <CardComponent className="w-full max-w-3xl p-6 shadow-lg">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
            Welcome to Our Web Application
          </h1>
          <p className="text-center text-gray-600 mb-6">
            This is a responsive homepage designed with reusable components.
          </p>
          <div className="flex justify-center gap-4">
            <ButtonComponent className="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
              Get Started
            </ButtonComponent>
            <ButtonComponent className="px-6 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300">
              Learn More
            </ButtonComponent>
          </div>
        </CardComponent>
      </GridComponent>

      {/* Add AboutPage below the main content */}
      <AboutPage />
    </div>
  );
};

export default HomePage;
