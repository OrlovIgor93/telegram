import React from "react";

import { Typography } from "../../Typography";

const style = {
  chip: {
    display: "inline-flex",
    minWidth: 11,
    padding: 3,
    backgroundColor: "#BFBFBF",
    borderRadius: 50,
    textOverflow: "ellipsis",
    color: "white",
    justifyContent: "space-evenly"
  }
};

export const Chip = ({ value }) => (
         <Typography style={style.chip} variant="caption">{value}</Typography>
       );
