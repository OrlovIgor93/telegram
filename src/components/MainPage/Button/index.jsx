import React from "react";

export const Button = ({ children, onClick, style }) => {
  return (
    <div style={buttonStyle} onClick={onClick}>
      {children}
    </div>
  );
};

export const buttonStyle = {
  backgroundColor: "green",
  border: "none",
  color: "#fff",
  cursor: "pointer"
};
