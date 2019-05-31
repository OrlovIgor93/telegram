import {useState, useEffect, useRef} from "react";
import firebase from "../../api/firebase";
import {getArrayByObject, getData, getMembersDialog} from "../../api/firestore";
import {useCollection, useCollectionOnce, useDocumentDataOnce} from "react-firebase-hooks/firestore";


export const useHistoryDialog = (selectedIndex, idDialogInfo) => {

    const [messagesActiveDialog, changeActiveDialog] = useState([]);
    const [activeDialogInfo, setActiveDialogInfo] = useState({});
    const [searchValueInDialog, setSearchValueInDialog] = useState("");
    const [users, setMember] = useState({});


    const query = firebase.db
        .collection(`dialogs`)
        .doc(`${selectedIndex}`)
        .collection(`messages`).orderBy("timeLastMessage");

    const [snapshot, loading, error] = useCollection(query,);
    const lenghtusers = Object.keys(users).length;


    useEffect(
        () => {
            console.log(`%c {value} `, 'color:red; background-color: #2274A5', snapshot)

            if (idDialogInfo !== activeDialogInfo.selectedIndex) {
                getData(`users/${idDialogInfo}`)
                    .then(res => {
                        setActiveDialogInfo({...res, selectedIndex})
                    })
            }

            if (selectedIndex && lenghtusers < 1) {
                getData(`dialogs/${selectedIndex}`)
                    .then(res => {
                        const {members} = res;
                        members.forEach(el => getData(`users/${el}`)
                            .then(data => {
                                    const user = {
                                        userName: data.userName,
                                        photoURL: data.photoURL
                                    };
                                    const key = `${data.phoneNumber}`;


                                    setMember((users) => {
                                            console.log(`%c users `, 'color:white; background-color: #2274A5', users);
                                            return {...users, [key]: user}
                                        }
                                    );
                                }
                            )
                        );

                    })

            }

            if (snapshot && users && lenghtusers > 1) {
                console.log(`%c users `, 'color:red; background-color: #2274A5', users);

                const arr = snapshot.docs.map(el => {
                    const data = el.data();
                    const idMessageGroup = el.id;
                    return {...data, idMessageGroup}
                });

                arr.forEach(el => {
                    const {authorId, messages, idMessageGroup} = el;
                    Promise.all([getArrayByObject(messages), getData(`users/${authorId}`)]).then(values => {
                        const [arr] = values;
                        const {userName, photoURL} = users[`${authorId}`];
                        const obj = messagesActiveDialog.find(x => x.idMessageGroup === idMessageGroup);
                        if (obj && obj.messages.length === arr.length) {
                            return null
                        } else if (obj && obj.messages.length !== arr.length) {
                            changeActiveDialog((messagesActiveDialog)=>{
                               const newarr = messagesActiveDialog.slice(0, -1);
                                return [
                                    ...newarr,
                                messagesActiveDialog[messagesActiveDialog.length-1]={
                                    userName,
                                    photoURL,
                                    authorId,
                                    messages: arr,
                                    idMessageGroup
                                }
                            ]})
                        } else {
                            changeActiveDialog((messagesActiveDialog) => [...messagesActiveDialog,{
                                userName,
                                photoURL,
                                authorId,
                                messages: arr,
                                idMessageGroup
                            } ])
                        }

                    });
                });
            }

        }
        ,
        [selectedIndex, idDialogInfo, snapshot, lenghtusers]
    );


    const handleSearchForDialog = ({target: {value}}) => {
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

                return {timeMessage, textMessage}
            });

            return {areYouAuthor, messages}
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


