import { useState, useEffect } from "react";
import { listDialogs } from "../../mock/listDialogs"
import { activeDialog } from "../../mock/activeDialog";


export const useHistoryDialog = (selectedIndex) => {

    const [ messagesActiveDialog, changeActiveDialog ] = useState([]);
    const [ activeDialogInfo, setActiveDialogInfo ] = useState({});
    const [ searchValueInDialog, setSearchValueInDialog ] = useState("");

    useEffect(
        () => {
            setDialog(selectedIndex)
        },
        [ selectedIndex ]
    );

    const setDialog = (id) => {
        const randomMessages = activeDialog.filter((el, i, arr) => {
            return arr.indexOf(el) % id === 0;
        });
        randomMessages.sort((a, b) => {
            return new Date(b.messages[0].timeMessage) - new Date(a.messages[0].timeMessage);
        });

        changeActiveDialog(randomMessages);

        setActiveDialogInfo(listDialogs.find(dialog => dialog.id === id));
    };

    const handleSearchForDialog = ({ target: { value } }) => {
        const regEx = new RegExp(`${value}`, "img");
        const regExOpenSpan = new RegExp(`<span>`, "g");
        const regExCloseSpan = new RegExp(`</span>`, "g");

        const searchText = messagesActiveDialog.map((el) => {
            const areYouAuthor = el.areYouAuthor;
            const messages = el.messages.map((mes) => {
                const timeMessage = mes.timeMessage;
                const textMessage = mes.textMessage
                    .replace(regExOpenSpan, "")
                    .replace(regExCloseSpan, "")
                    .replace(regEx, `<span>${value}</span>`);

                return { timeMessage, textMessage }
            });

            return { areYouAuthor, messages }
        });

        changeActiveDialog(searchText);

        setSearchValueInDialog(value);
    };

    const handlerBlurSearchDialog = () => {
        setSearchValueInDialog("");
        setDialog(activeDialogInfo.id);
    };


    return {
        messagesActiveDialog,
        activeDialogInfo,
        searchValueInDialog,
        handleSearchForDialog,
        handlerBlurSearchDialog
    };

};


