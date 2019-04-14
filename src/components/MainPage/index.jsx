import React, {useState} from "react";
import Header from "../Header/Header";
import { DialogsColumn } from "./DialogsColumn";
import { HistoryColumn } from "./HistoryColumn";
import { VerticalWrap } from "./VerticalWrap";
import { HorizontalWrap } from "./HorizontalWrap";
import { activeDialog } from "../../mock/activeDialog";
import { listDialogs } from "../../mock/listDialogs";

import { wrapPageStyle, pageContextStyle } from "./styles";


export const MainPage = () => {
  const [listUserDialogs, filterListDialogs] = useState(listDialogs);
  const [messagesActiveDialog, changeActiveDialog] = useState(activeDialog);
 

  return (
    <VerticalWrap style={wrapPageStyle}>
      <Header />
      <HorizontalWrap style={pageContextStyle}>
        <DialogsColumn listUserDialogs={listUserDialogs} />
        <HistoryColumn messagesActiveDialog={messagesActiveDialog} />
      </HorizontalWrap>
    </VerticalWrap>
  );}


