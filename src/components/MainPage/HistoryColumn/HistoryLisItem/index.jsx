import React from "react";
import Typography from "@material-ui/core/Typography";
import { AvatarApp } from "../../../Avatar/Avatar";
import { VerticalWrap } from "../../VerticalWrap";
import { HorizontalWrap } from "../../HorizontalWrap";

import "./style.css";

export const HistoryListItem = ({
  id,
  areYouAuthor,
  lastMessage,
  profileInfo: { img, fullName },
  activeDialogInfo: { imgUrl, name }
}) => (
  <div className="dialog-item">
    <HorizontalWrap style={dialogInfoStyle}>
      <AvatarApp
        style={{ marginRight: 15 }}
        src={areYouAuthor ? img : imgUrl}
        name={areYouAuthor ? fullName : name}
      />
      <VerticalWrap style={strechAreaStyle}>
        <Typography variant="subtitle1">
          {areYouAuthor ? fullName : name}
        </Typography>
        <Typography variant="body2" gutterBottom style={{ maxWidth: 400 }}>
          {lastMessage}
        </Typography>
      </VerticalWrap>

      <Typography variant="caption" style={{ marginLeft: "auto" }}>
        {new Date(id).toLocaleTimeString()}
      </Typography>
    </HorizontalWrap>
  </div>
);
export const strechAreaStyle = {
  justifyContent: "space-between"
};

export const infoLastMessageStyle = {
  justifyContent: "space-between"
};

export const dialogInfoStyle = {
  padding: "7px 14px",
  justifyContent: "space-between",
  overflow: "hidden"
};
