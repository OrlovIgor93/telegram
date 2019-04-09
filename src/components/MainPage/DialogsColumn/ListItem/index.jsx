import React from "react";
import { DialogInfo } from "../DialogInfo";

import "./style.css";

export const ListItem = ({ dialogInfo, lastMessage}) => (
  <div className="dialog-item">
    <DialogInfo dialogInfo={dialogInfo} lastMessage={lastMessage} />
  </div>
);
