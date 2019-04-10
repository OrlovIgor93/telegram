import React from "react";
import { Header } from "../Header";
import { DialogsColumn } from "./DialogsColumn";
import { HistoryColumn } from "./HistoryColumn";
import { VerticalWrap } from "./VerticalWrap";
import { HorizontalWrap } from "./HorizontalWrap";

import { wrapPageStyle, pageContextStyle } from "./styles";

export const MainPage = () => (
  <VerticalWrap style={wrapPageStyle}>
    <Header />

    <HorizontalWrap style={pageContextStyle}>
      <DialogsColumn />
      <HistoryColumn />
    </HorizontalWrap>
  </VerticalWrap>
);
