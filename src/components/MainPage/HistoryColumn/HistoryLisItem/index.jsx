import React from "react";
import { Chip } from "../../Chip";
import { Title, BodyText, Caption } from "../../Typography";
import { Avatar } from "../../../Avatar";
import { VerticalWrap } from "../../VerticalWrap";
import { HorizontalWrap } from "../../HorizontalWrap";

// import {
  
  
  
  
// } from "../../styles";

import "./style.css";

export const HistoryListItem = ({ dialogInfo, lastMessage }) => (
         <div className="dialog-item">
           <HorizontalWrap style={dialogInfoStyle}>
             <Avatar
               style={{ marginRight: 15 }}
               src={dialogInfo.urlImg}
               name={dialogInfo.name}
             />

             <VerticalWrap style={strechAreaStyle}>
               <Title>
                 {dialogInfo.name}
               </Title>
               <BodyText style={{maxWidth: 400}}>
                 {lastMessage.text}
               </BodyText>
             </VerticalWrap>

             
               <Caption style={{marginLeft: "auto"}} variant="caption">
                 {new Date(lastMessage.timeMessage).getFullYear()}
               </Caption>
               
             
           </HorizontalWrap>
         </div>
       );
export const strechAreaStyle = {
  justifyContent: "space-between"
};

export const infoLastMessageStyle = {
  justifyContent: "space-between",
  
};

export const dialogInfoStyle = {
  padding: "7px 14px",
  justifyContent: "space-between",
  overflow: "hidden"
};