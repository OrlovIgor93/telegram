import React from "react";

import { Typography } from "../../Typography";

const style = {
  chip: {
    display: "inline-flex",
    padding: 3,
    backgroundColor: "#868686",
    borderRadius: 50,
    textOverflow: "ellipsis",
    color: "white"
  }
};

export const Chip = ({ value }) => (
         <Typography style={style.chip} variant="caption">{value}</Typography>
       );
