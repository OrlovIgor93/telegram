import React from "react";
import { chipStyle } from "../styles"
import Typography from "@material-ui/core/Typography"

export const Chip = ({ value }) => (
    <Typography variant="caption" style={chipStyle}>
        {value}
    </Typography>
);
