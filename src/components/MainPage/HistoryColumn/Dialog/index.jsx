import React from "react";
import { Link } from "react-router-dom";
import { Avatar } from "../../../Avatar";

import "./style.css";

export const Dialog = () => (
  <div className="inputMesageArea">
    <Avatar
      src={require(`../../../../img/user//06d755d2-bf62-4b4f-b817-015869261d04.jpg`)}
      big
    />

    <textarea
      type="textArea"
      className="inputMessage"
      rows="2"
      cols="50"
      placeholder="Write a message..."
    />
    
    <Link to="contact">
      <Avatar
        src={require("../../../../img/user/08a594be-8778-49b8-a336-37f52b54e47c.jpg")}
        big
      />
    </Link>
  </div>
);
