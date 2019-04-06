import React from "react";
import { Chip } from "../Chip";

import "./style.css";

export const DialogInfo = ({ profileName, lastMessage }) => {
  return (
    <div className="dialogInfo">
      <div className="strechArea">
        <div className="dialogName">{profileName}</div>
        <div className="dialogLastMessage">{lastMessage.text}</div>
      </div>
      <div className="infoLastMessage">
        <div className="dialogLastMessage">
          {new Intl.DateTimeFormat().format(
            new Date(lastMessage.idLastMessage)
          )}
        </div>

        <Chip value={15} />
      </div>
    </div>
  );
};
