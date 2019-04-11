import React from "react";
import { HistoryListItem } from "../HistoryLisItem";
import { VerticalWrap } from "../../VerticalWrap";
import { activeDialog } from "../../../../mock/activeDialog";

import "./style.css";

export const HistoryList = () => (
         <VerticalWrap
           className="message-context"
           style={buttomPanelWrap}
         >
           {activeDialog.map(({ profileName, dialogInfo }) => (
             <HistoryListItem
               key={dialogInfo.timeMessage}
               dialogInfo={profileName}
               lastMessage={dialogInfo}
             />
           ))}
         </VerticalWrap>
       );
export const buttomPanelWrap = {
  margin: "0 auto",
  padding: "0 15px 0",
  overflow: "auto",
  flexDirection: "column-reverse"
};

