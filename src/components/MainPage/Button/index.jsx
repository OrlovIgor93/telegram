import React from "react";

export const Button = ({ children, onClick, style }) => {
  return (
    <div style={defaultButtonStyle} onClick={onClick}>
      {children}
    </div>
  );
};

export const defaultButtonStyle = {
  height: 15,
  width: 15,
  backgroundColor: "green",
  border: "none",
  color: "#fff",
  cursor: "pointer"
};
