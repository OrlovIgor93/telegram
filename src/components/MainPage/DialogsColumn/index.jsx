import React from "react";
import { SearchInput } from "../SearchInput";
import { VerticalWrap } from "../VerticalWrap";
import DialogsList from "./DialogsList/DialogsList";
import { dialogsColumnStyle } from "../styles";

export const DialogsColumn = () => (
  <VerticalWrap style={dialogsColumnStyle}>
    <SearchInput />
    <DialogsList />
  </VerticalWrap>
);
