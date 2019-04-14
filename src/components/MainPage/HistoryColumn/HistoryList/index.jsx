import React from "react";
import { HistoryListItem } from "../HistoryLisItem";
import { VerticalWrap } from "../../VerticalWrap";

import "./style.css";

export const HistoryList = ({ messagesActiveDialog }) => (
  <VerticalWrap className="message-context" style={buttomPanelWrap}>
    {messagesActiveDialog.map(({ id, areYouAuthor, lastMessage }) => (
      <HistoryListItem
        key={id}
        id={id}
        areYouAuthor={areYouAuthor}
        lastMessage={lastMessage}
      />
    ))}
  </VerticalWrap>
);

export const buttomPanelWrap = {
  margin: "0 auto",
  padding: "0 15px 0",
  overflow: "auto",
  flexDirection: "column-reverse"
};
