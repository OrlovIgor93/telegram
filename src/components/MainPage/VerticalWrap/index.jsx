import React from "react";
import { verticalWrap } from "../styles";

export const VerticalWrap = ({ children, style }) => (
         <div style={{...verticalWrap, ...style}}>{children}</div>
       );