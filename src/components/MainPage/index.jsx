import React, {useState} from "react";
import Header from "./Header/Header";
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
    const [searchValueInDialog, setSearchValueInDialog] = useState("");

    const setActiveDialog = id => {
        // Random messages --- crutch
        const randomMessages = activeDialog.filter((el, i, arr) => {
            return arr.indexOf(el) % id === 0;
        });
        randomMessages.sort((a, b) => {
            return new Date(b.messages[0].timeMessage) - new Date(a.messages[0].timeMessage);
        });
        setSelectedIndex(id);
        changeActiveDialog(randomMessages);

        setActiveDialogInfo(listDialogs.find(dialog => dialog.id === id));
        console.log(valueSearchInput);
        if (valueSearchInput) {
            changeDialogListView("");
            setValueSearchInput("")
        }

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

    const handleSearchForDialog = ({target: {value}}) => {
        const regEx = new RegExp(`${value}`, "img");
        const regExOpenSpan = new RegExp(`<span>`, "g");
        const regExCloseSpan = new RegExp(`</span>`, "g");

        const searchText = messagesActiveDialog.map((el) => {
            const areYouAuthor = el.areYouAuthor;
            const messages = el.messages.map((mes) => {
                const timeMessage = mes.timeMessage;
                const textMessage = mes.textMessage
                    .replace(regExOpenSpan, '')
                    .replace(regExCloseSpan, '')
                    .replace(regEx, `<span>${value}</span>`);

                return {timeMessage, textMessage}
            });

            return {areYouAuthor, messages}
        });

        changeActiveDialog(searchText);

        setSearchValueInDialog(value);
    };

    const handlerBlurSearchDialog = () => {
        setSearchValueInDialog('');
        setActiveDialog(selectedIndex);
    };

    return (
        <MainPageContext.Provider value={{
                                        profileInfo,
                                        activeDialogInfo,
                                        valueSearchInput,
                                        searchValueInDialog,
                                        setActiveDialog,
                                        selectedIndex,
                                        onChangeSearchInput,
                                        messagesActiveDialog,
                                        handleSearchForDialog,
                                        handlerBlurSearchDialog,
                                        changeActiveDialog
        }}>
            <VerticalWrap style={wrapPageStyle}>
                <Header/>
                <HorizontalWrap style={pageContextStyle}>
                    <DialogsColumn
                        listUserDialogs={
                            valueSearchInput === "" ? listUserDialogs : filteredList
                        }
                    />
                    <HistoryColumn selectedIndex={selectedIndex}/>
                </HorizontalWrap>
            </VerticalWrap>
        </MainPageContext.Provider>
    );
};
