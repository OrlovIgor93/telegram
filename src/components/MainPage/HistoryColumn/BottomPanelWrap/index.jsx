import React from "react";
import { Link } from "react-router-dom";
import { AvatarApp } from "../../../Avatar/Avatar";
import { SendForm } from "../SendForm";
import { HorizontalWrap } from "../../HorizontalWrap";

import "./style.css";

export const BottomPanelWrap = ({ profileInfo: {img, fullName} }) => (
  <div style={buttomPanelWrap}>
    {(() => {
      console.log("-colunmHistory", img, fullName);
    })()}
    <HorizontalWrap>
      <Link to="settings">
        <AvatarApp
          big
          style={{ marginRight: 20 }}
          src={img}
          // name={profileInfo.fullName}
        />
      </Link>
      <SendForm />
      <Link to="contact">
        <AvatarApp
          style={{ marginLeft: 20 }}
          src={require("../../../../img/user/08a594be-8778-49b8-a336-37f52b54e47c.jpg")}
          big
        />
      </Link>
    </HorizontalWrap>
  </div>
);

export const buttomPanelWrap = {
  margin: "0 auto",
  padding: "10px 15px 30px"
};
