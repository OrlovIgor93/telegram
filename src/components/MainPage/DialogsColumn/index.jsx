import React from "react";
import SearchInput from "../SearchInput";
import { VerticalWrap } from "../VerticalWrap";
import DialogsList from "./DialogsList/DialogsList";
import { dialogsColumnStyle } from "../styles";
import Typography from "@material-ui/core/Typography";

export const DialogsColumn = ({
  listUserDialogs,
  selectedIndex,
  setActiveDialog,
  onChangeSearchInput
}) => (
  <VerticalWrap style={dialogsColumnStyle}>
    <SearchInput onChangeSearchInput={onChangeSearchInput} />

    <DialogsList
      listUserDialogs={listUserDialogs}
      setActiveDialog={setActiveDialog}
      selectedIndex={selectedIndex}
    />

    {listUserDialogs.length === 0 && (
      <Typography variant="title">Not found</Typography>
    )}
  </VerticalWrap>
);
