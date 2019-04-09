import React from "react";
import { DialogInfo } from "../DialogInfo";

import "./style.css";

export const ListItem = ({ dialogInfo, lastMessage}) => (
  <li className="dialog-item">
    <DialogInfo dialogInfo={dialogInfo} lastMessage={lastMessage} />
  </li>
);
