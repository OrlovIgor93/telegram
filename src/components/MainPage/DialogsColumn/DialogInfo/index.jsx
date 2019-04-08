import React from "react";
import { Chip } from "../Chip";
import { Typography } from '../../Typography'

import "./style.css";

export const DialogInfo = ({ profileName, lastMessage }) => {
  return (
    <div className="dialogInfo">
      <div className="strechArea">
        <Typography style={style.decorationOverflow} variant="title">{profileName}</Typography>
        <Typography style={style.decorationOverflow} variant="body">
          {lastMessage.text}
        </Typography>
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

const style ={
  decorationOverflow:{
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  }
}