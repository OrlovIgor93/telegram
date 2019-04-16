import React from "react";
import { Link } from "react-router-dom";
import { AvatarApp } from "../../../Avatar/Avatar";
import { SendForm } from "../SendForm";
import { HorizontalWrap } from "../../HorizontalWrap";

import "./style.css";

export const BottomPanelWrap = ({
         profileInfo: { img, fullName },
         activeDialogInfo: { imgUrl, name }
       }) => (
         <div style={buttomPanelWrap}>
           <HorizontalWrap>
             <Link to="settings">
               <AvatarApp
                 big
                 style={{ marginRight: 20 }}
                 src={img}
                 name={fullName}
                 // name={profileInfo.fullName}
               />
             </Link>
             <SendForm />
             <Link to="contact">
               <AvatarApp
                 big
                 style={{ marginLeft: 20 }}
                 src={imgUrl}
                 name={name}
               />
             </Link>
           </HorizontalWrap>
         </div>
       );

export const buttomPanelWrap = {
  margin: "0 auto",
  padding: "10px 15px 30px"
};
