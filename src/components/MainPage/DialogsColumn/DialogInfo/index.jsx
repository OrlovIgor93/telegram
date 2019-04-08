import React from "react";
import { Chip } from "../Chip";
import { Typography } from '../../Typography'

import "./style.css";

export const DialogInfo = ({ profileName, lastMessage }) => {
  return (
    <div className="dialogInfo">
      <div className="strechArea">
        <Typography variant="title">{profileName}</Typography>
        <Typography variant="body">{lastMessage.text}</Typography>
      </div>
      <div className="infoLastMessage">
        <Typography variant="caption">
          {new Intl.DateTimeFormat().format(
            new Date(lastMessage.idLastMessage)
          )}
        </Typography>

        <Chip value={2} />
      </div>
    </div>
  );
};
