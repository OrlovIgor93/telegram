import React from "react";
import { SearchInput } from "./SearchInput";
import { ListDialogs } from "./ListDialogs";


const style = {
  dialogsColumn: {
    display: "flex",
    flexDirection: "column",
    flex: "1 2 31 %",
    width: "31%",
    justifyContent: "center",
    borderRight: "2px solid #e2e2e2",
  }
};

export const DialogsColumn = () => (
  <div style={style.dialogsColumn}>
    <SearchInput />
    <ListDialogs />
  </div>
);

