import React from "react";

export const Button = ({ children, onClick, style }) => {

    const stylesUsed = [
      defaultButtonStyle,
      style
    ];

    const allStyle = stylesUsed.reduce(function(prev, curr) {
      return { ...prev, ...curr };
    }, {});

  return (
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
