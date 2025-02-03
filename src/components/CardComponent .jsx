// src/components/CardComponent.jsx
import React from 'react';

const CardComponent = ({ children, className }) => (
  <div className={`bg-white p-4 rounded-lg shadow-lg ${className}`}>
    {children}
  </div>
);


export default CardComponent;
