import React from "react";

import { Caption } from "../Typography";
import { chipStyle } from "../styles"


export const Chip = ({ value }) => (
         <Caption style={chipStyle}>{value}</Caption>
       );
