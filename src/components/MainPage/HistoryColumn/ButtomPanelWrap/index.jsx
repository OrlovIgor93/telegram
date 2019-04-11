import React from "react";
import { Link } from "react-router-dom";
import { Avatar } from "../../../Avatar";
import { SendForm } from "../SendForm";
import { HorizontalWrap } from "../../HorizontalWrap";

import { VerticalWrap } from "../../VerticalWrap";

import "./style.css";

export const ButtomPanelWrap = () => (
         <div style={buttomPanelWrap}>
           <HorizontalWrap>
             <Avatar
               style={{ marginRight: 20 }}
               src={require(`../../../../img/user//06d755d2-bf62-4b4f-b817-015869261d04.jpg`)}
               big
             />
             <SendForm />
             <Link to="contact">
               <Avatar
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
  padding: "10px 15px 30px",
};
