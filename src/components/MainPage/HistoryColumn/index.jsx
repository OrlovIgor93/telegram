import React from "react";
import { BottomPanelWrap } from "./BottomPanelWrap";
import { HistoryList } from "./HistoryList";
import { VerticalWrap } from "../VerticalWrap";

import { historyColumnStyle } from "../styles";

export const HistoryColumn = ({ messagesActiveDialog }) => (
         <VerticalWrap style={historyColumnStyle}>
           <BottomPanelWrap />
           <HistoryList messagesActiveDialog={messagesActiveDialog} />
         </VerticalWrap>
       );
