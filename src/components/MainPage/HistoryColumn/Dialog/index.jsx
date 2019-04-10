import React from "react";
import { Link } from "react-router-dom";
import { Avatar } from "../../../Avatar";
import { SendForm } from "../SendForm";

import "./style.css";

export const ButtomPanelWrap = () => (
         <div style={buttomPanelWrap}>
           <Avatar
             src={require(`../../../../img/user//06d755d2-bf62-4b4f-b817-015869261d04.jpg`)}
             big
           />
           <div className="formMesage">
             <textarea
               className="inputMessage"
               type="textArea"
               rows="2"
               cols="50"
               placeholder="Write a message..."
             />
             <div>
               <div style={{ height: 50, width: 200, color: "green" }} />
             </div>
           </div>
           <Link to="contact">
             <Avatar
               src={require("../../../../img/user/08a594be-8778-49b8-a336-37f52b54e47c.jpg")}
               big
             />
           </Link>
         </div>
       );

export const buttomPanelWrap = {
  display: "flex",  


}