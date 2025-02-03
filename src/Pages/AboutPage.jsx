// src/pages/AboutPage.js
import React from "react";


const AboutPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="max-w-3xl p-6 shadow-lg bg-white rounded-lg">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
          About Us
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          We are a team of developers dedicated to building scalable and user-friendly applications.
        </p>
        <p className="text-gray-600">
          Our goal is to provide high-quality software solutions that meet the needs of businesses and individuals.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
