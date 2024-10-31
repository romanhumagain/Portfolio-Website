import React from 'react';

const TechStack = ({ technology }) => {
  const { icon: Icon, brand_color, name } = technology;

  return (
    <div
      className="flex items-center px-2 py-1 rounded-full shadow-md"
      style={{
        backgroundColor: brand_color,
      }}
    >
      <span className="flex items-center">
        <Icon className="mr-1 text-white text-md" />
        <span className="text-xs font-medium text-white">{name}</span>
      </span>
    </div>
  );
};

export default TechStack;
