import React from "react";
import { horizontalWrap } from "../styles";

export const HorizontalWrap = ({ children, style }) => (
  <div style={{ ...horizontalWrap, ...style }}>{children}</div>
);
