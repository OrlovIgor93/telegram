import React from "react";
import { Chip } from "../Chip";
import { Typography } from '../../Typography'
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
             <Typography
               style={style.decorationOverflow}
               variant="title"
             >
               {dialogInfo.name}
             </Typography>
             <Typography style={style.decorationOverflow} variant="body">
               {lastMessage.text}
             </Typography>
           </div>
           <div className="infoLastMessage">
             <Typography variant="caption">
               {new Date(lastMessage.timeMessage).getFullYear()}
             </Typography>

             <Chip value={2} />
           </div>
         </div>
       );


const style ={
  decorationOverflow:{
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  }
}