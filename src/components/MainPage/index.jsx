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
  const [messagesActiveDialog, changeActiveDialog] = useState([]);
  const [profileInfo, changeProfileInfo] = useState(accountData);
  const [selectedIndex, setSelectedIndex] = useState();
  const [activeDialogInfo, setActiveDialogInfo] = useState({});
  const [valueSearchInput, setValueSearchInput] = useState('');

  const setActiveDialog = id => {

    // Random messages --- crutch
    const randomMessages = activeDialog.filter((el, i, arr) => {
      return arr.indexOf(el) % id === 0;
    });
    setSelectedIndex(id);
    changeActiveDialog(randomMessages);
    setActiveDialogInfo(listDialogs.find(dialog => dialog.id === id));
  };

  const onChangeSearchInput = ({ target: { value } }) => {
    setValueSearchInput(value);
    console.log(setValueSearchInput);
  };

  const changeDialogListView =() =>{
    return (listUserDialogs.filter((el) => {
           return  (el.name.indexOf(valueSearchInput)) !==-1}))
  }

  return (
    <VerticalWrap style={wrapPageStyle}>
      <Header profileInfo={profileInfo} activeDialogInfo={activeDialogInfo} />
      <HorizontalWrap style={pageContextStyle}>
        <DialogsColumn
          listUserDialogs={
            setValueSearchInput === ""
              ? listUserDialogs
              : changeDialogListView()
          }
          setActiveDialog={setActiveDialog}
          selectedIndex={selectedIndex}
          valueSearchInput={valueSearchInput}
          onChangeSearchInput={onChangeSearchInput}
        />

        <HistoryColumn
          messagesActiveDialog={messagesActiveDialog}
          profileInfo={profileInfo}
          activeDialogInfo={activeDialogInfo}
        />
      </HorizontalWrap>
    </VerticalWrap>
  );
};
