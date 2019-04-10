import React from "react";
import { Chip } from "../../Chip";
import { Title, BodyText, Caption } from "../../Typography";
import { Avatar } from "../../../Avatar";
import { VerticalWrap } from "../../VerticalWrap";
import { HorizontalWrap } from "../../HorizontalWrap";

import {
  dialogInfoStyle,
  strechAreaStyle,
  infoLastMessageStyle,
  decorationOverflowStyle
} from "../../styles";

import "./style.css";

export const DialogListItem = ({ dialogInfo, lastMessage }) => (
         <div className="dialog-item">
           <HorizontalWrap style={dialogInfoStyle}>
             <Avatar
               medium
               style={{ marginRight: 15 }}
               src={dialogInfo.urlImg}
               name={dialogInfo.name}
             />

             <VerticalWrap style={strechAreaStyle}>
               <Title style={decorationOverflowStyle}>
                 {dialogInfo.name}
               </Title>
               <BodyText style={decorationOverflowStyle}>
                 {lastMessage.text}
               </BodyText>
             </VerticalWrap>

             <VerticalWrap style={infoLastMessageStyle}>
               <Caption variant="caption">
                 {new Date(lastMessage.timeMessage).getFullYear()}
               </Caption>
               <Chip value={2} />
             </VerticalWrap>
           </HorizontalWrap>
         </div>
       );
