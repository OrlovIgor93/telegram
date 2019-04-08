import React from "react";

import { DialogInfo } from "../DialogInfo";
import { Avatar } from "../../../Avatar";

import "./style.css";

export const ListItem = ({ lastMessage, profileName, ...attrs }) => {
  return (
    <li className="dialog-item">
      <Avatar
      className="avatar"
        style={{
          height: 48,
          width: 48,
          backgroundColor: "pink"
        }}
        src={attrs.src}
      >
        {profileName}
      </Avatar>
      <DialogInfo profileName={profileName} lastMessage={lastMessage} />
    </li>
  );
};


