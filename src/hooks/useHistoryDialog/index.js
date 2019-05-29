import { useState, useEffect } from "react";
import firebase from "../../api/firebase";
import {getUserData} from "../useDialogs";
import {getData} from "../../api/firestore";


export const useHistoryDialog = (selectedIndex, idDialogInfo) => {

    const [ messagesActiveDialog, changeActiveDialog ] = useState([]);
    const [ activeDialogInfo, setActiveDialogInfo ] = useState({});
    const [ searchValueInDialog, setSearchValueInDialog ] = useState("");

    useEffect(
        () => {
            if(idDialogInfo){
                getData(`users/${idDialogInfo}`)
                    .then(res=>{
                        console.log('---',res)
                        setActiveDialogInfo(res)
                    })



            }
            if (selectedIndex) {
                const ref = firebase.db.collection('dialogs').doc(selectedIndex)
                    .collection('messages')
                    .get();

                    ref.then(
                    (d)=> d.docs.map(d=>d.data()


                    )).then((e)=> changeActiveDialog(e)  )

            }

        },
        [ selectedIndex, idDialogInfo ]
    );



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
    };


    return {
        messagesActiveDialog,
        activeDialogInfo,
        searchValueInDialog,
        handleSearchForDialog,
        handlerBlurSearchDialog
    };

};


