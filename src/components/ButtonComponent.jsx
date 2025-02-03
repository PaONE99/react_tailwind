// src/components/ButtonComponent.jsx
import React from 'react';

const ButtonComponent = ({ children, className, onClick }) => {
  return (
    <button className={`px-4 py-2 rounded-lg focus:outline-none ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default ButtonComponent;
