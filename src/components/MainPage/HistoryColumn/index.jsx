import React from "react";
import { BottomPanelWrap } from "./BottomPanelWrap";
import { HistoryList } from "./HistoryList";
import { VerticalWrap } from "../VerticalWrap";

import { historyColumnStyle } from "../styles";

export const HistoryColumn = ({ messagesActiveDialog, profileInfo }) => (
  <VerticalWrap style={historyColumnStyle}>
    <BottomPanelWrap profileInfo={profileInfo} />
    <HistoryList messagesActiveDialog={messagesActiveDialog} />
  </VerticalWrap>
);
