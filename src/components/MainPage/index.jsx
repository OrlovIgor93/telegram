import React, { useState } from "react";
import Header from "../Header/Header";
import { DialogsColumn } from "./DialogsColumn";
import { HistoryColumn } from "./HistoryColumn";
import { VerticalWrap } from "./VerticalWrap";
import { HorizontalWrap } from "./HorizontalWrap";
import { activeDialog } from "../../mock/activeDialog";
import { listDialogs } from "../../mock/listDialogs";
import { accountData } from "../../mock/accountData";

import { wrapPageStyle, pageContextStyle } from "./styles";

export const MainPage = () => {
  const [listUserDialogs, filterListDialogs] = useState(listDialogs);
  const [messagesActiveDialog, changeActiveDialog] = useState(activeDialog);
  const [profileInfo, changeProfileInfo] = useState(accountData);



  return (
    <VerticalWrap style={wrapPageStyle}>
      <Header />
      <HorizontalWrap style={pageContextStyle}>
        <DialogsColumn
          listUserDialogs={listUserDialogs}
        />
        <HistoryColumn
          messagesActiveDialog={messagesActiveDialog}
          profileInfo={profileInfo}
        />
      </HorizontalWrap>
    </VerticalWrap>
  );
};
