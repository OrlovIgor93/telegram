import React from "react";
import { listDialogs } from "../../../../mock/listDialogs";
import "./style.css";
import { DialogListItem } from "../DialogListItem";

export const ListDialogs = () => (
         <ul className="dialogs-list">
           {listDialogs.map(({ id, dialogInfo, lastMessage }) => (
             <DialogListItem
               key={id}
               dialogInfo={dialogInfo}
               lastMessage={lastMessage}
             />
           ))}
         </ul>
       );


