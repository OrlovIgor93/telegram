import React from "react";

const style = {
  chip: {
    display: "inline-flex",
    alignItems: "center",
    padding: 3,
    backgroundColor: "#868686",
    borderRadius: 50,
    textOverflow: "ellipsis",
    color: "white"
  }
};

export const Chip = ({ value }) => {
    return <span style={style.chip}>{value}</span>;
};
