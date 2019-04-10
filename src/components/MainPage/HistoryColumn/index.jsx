import React from "react";
import { ButtomPanelWrap } from "./ButtomPanelWrap";
import { HistoryList } from "./HistoryList";
import { VerticalWrap } from "../VerticalWrap";

import { historyColumnStyle } from "../styles";

export const HistoryColumn = () => (
  <VerticalWrap style={historyColumnStyle}>
    <ButtomPanelWrap />
    <HistoryList /> 
  </VerticalWrap>
);
