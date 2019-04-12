import React from "react";

import { Link } from "react-router-dom";

export const Button = ({ children, onClick, style, to }) => {

    const stylesUsed = [
      defaultButtonStyle,
      style
    ];

    const allStyle = stylesUsed.reduce(function(prev, curr) {
      return { ...prev, ...curr };
    }, {});

  return to ? (
    <div style={allStyle} onClick={onClick}>      
        <Link style={allStyle} to={to}>
          {children}
        </Link>      
    </div>
  ) : (
    <div style={allStyle} onClick={onClick}>
      {children} 
    </div>
  );
};





export const defaultButtonStyle = {
   display: "inline-block",
  border: "none",
  color: "#fff",
  cursor: "pointer"
};
