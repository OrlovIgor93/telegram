import React, {useState} from "react";
import Header from "../Header/Header";
import {DialogsColumn} from "./DialogsColumn";
import {HistoryColumn} from "./HistoryColumn";
import {VerticalWrap} from "./VerticalWrap";
import {HorizontalWrap} from "./HorizontalWrap";
import {activeDialog} from "../../mock/activeDialog";
import {listDialogs} from "../../mock/listDialogs";
import {accountData} from "../../mock/accountData";

import {wrapPageStyle, pageContextStyle} from "./styles";

import {MainPageContext} from "./MainPageContext"

export const MainPage = () => {
    const [listUserDialogs, setListUserDialogs] = useState(listDialogs.sort((a, b) => {
        return new Date(b.timeLastMessage) - new Date(a.timeLastMessage);
    }));
    const [messagesActiveDialog, changeActiveDialog] = useState([]);
    const [profileInfo, changeProfileInfo] = useState(accountData);
    const [selectedIndex, setSelectedIndex] = useState();
    const [activeDialogInfo, setActiveDialogInfo] = useState({});
    const [valueSearchInput, setValueSearchInput] = useState("");
    const [filteredList, setFilteredList] = useState();

    const setActiveDialog = id => {
        // Random messages --- crutch
        const randomMessages = activeDialog.filter((el, i, arr) => {
            return arr.indexOf(el) % id === 0;
        });
        setSelectedIndex(id);
        changeActiveDialog(randomMessages);
        setValueSearchInput("");
        setActiveDialogInfo(listDialogs.find(dialog => dialog.id === id));
    };

    const onChangeSearchInput = ({target: {value}}) => {
        changeDialogListView(value);
        setValueSearchInput(value);
    };

    const changeDialogListView = value => {
        const valueToLower = value.toLowerCase();

        const filterDialogs = listUserDialogs.filter(
            el => el.name.toLowerCase().indexOf(valueToLower) !== -1
        );

        setFilteredList(filterDialogs);
    };

    const onSelectSearchForDialog = () => {

    }

    return (
        <MainPageContext.Provider value={{
            profileInfo,
            activeDialogInfo,
            valueSearchInput,
            setActiveDialog,
            selectedIndex,
            onChangeSearchInput,
            messagesActiveDialog,
            onSelectSearchForDialog
        }
        }>
            <VerticalWrap style={wrapPageStyle}>
                <Header/>
                <HorizontalWrap style={pageContextStyle}>
                    <DialogsColumn
                        listUserDialogs={
                            valueSearchInput === "" ? listUserDialogs : filteredList
                        }
                    />
                    <HistoryColumn messagesActiveDialog={messagesActiveDialog}/>
                </HorizontalWrap>
            </VerticalWrap>
        </MainPageContext.Provider>
    );
};
