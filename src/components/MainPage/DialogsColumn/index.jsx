import React from "react";
import { SearchInput } from "./SearchInput";
import { ListDialogs } from "./ListDialogs";

import "./style.css";

export const DialogsColumn = () => (
  <div className="dialogs-column">
    <SearchInput />
    <ListDialogs />
  </div>
);
