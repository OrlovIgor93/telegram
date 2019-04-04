import React from "react";

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

        <div className="chip">
          <div className="chipText">5</div>
        </div>
      </div>
    </div>
  );
};
