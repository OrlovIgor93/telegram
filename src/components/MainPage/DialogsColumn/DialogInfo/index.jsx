import React from "react";
import { Chip } from "../Chip";
import { Title, BodyText, Caption } from "../../Typography";
import { Avatar } from "../../../Avatar";

import "./style.css";

export const DialogInfo = ({ dialogInfo, lastMessage }) => (
  <div className="dialogInfo">
    <Avatar
      medium
      style={{ marginRight: 15 }}
      src={dialogInfo.urlImg}
      name={dialogInfo.name}
    />

    <div className="strechArea">
      <Title style={style.decorationOverflow}>{dialogInfo.name}</Title>
      <BodyText style={style.decorationOverflow}>{lastMessage.text}</BodyText>
    </div>
    <div className="infoLastMessage">
      <Caption variant="caption">
        {new Date(lastMessage.timeMessage).getFullYear()}
      </Caption>

      <Chip value={2} />
    </div>
  </div>
);

const style = {
  decorationOverflow: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis"
  }
};
