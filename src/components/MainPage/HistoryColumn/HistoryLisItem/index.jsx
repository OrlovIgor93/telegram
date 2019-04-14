import React from "react";
import { BodyText, Caption } from "../../Typography";
import  { AvatarApp }  from "../../../Avatar/Avatar";
import { VerticalWrap } from "../../VerticalWrap";
import { HorizontalWrap } from "../../HorizontalWrap";

import "./style.css";

export const HistoryListItem = ({ id, areYouAuthor, lastMessage }) => (
         <div className="dialog-item">
           <HorizontalWrap style={dialogInfoStyle}>
             {areYouAuthor ? (
               <AvatarApp
                 style={{ marginRight: 15 }}
                 src={null}
                 name={"XZ"}
               />
             ) : null}

             <VerticalWrap style={strechAreaStyle}>
               {/* <Title>{dialogInfo.name}</Title> */}
               <BodyText style={{ maxWidth: 400 }}>
                 {lastMessage}
               </BodyText>
             </VerticalWrap>

             <Caption style={{ marginLeft: "auto" }} variant="caption">
               {new Date(id).toLocaleTimeString()}
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