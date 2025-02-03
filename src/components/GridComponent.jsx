// src/components/GridComponent.jsx
import React from 'react';

const GridComponent = ({ children, className }) => {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ${className}`}>
      {children}
    </div>
  );
};

export default GridComponent;
