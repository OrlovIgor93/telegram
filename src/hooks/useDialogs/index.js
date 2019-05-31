import {useEffect, useReducer} from 'react';
import {
    GET_DIALOGS,
    SEARCH_IN_LIST_DIALOGS,
    SET_ACTIVE_DIALOG,
    ADD_DIALOG,
    REMOVE_DIALOG,
} from '../../constants';
import firebase from "../../api/firebase";
import {useCollection, useCollectionDataOnce, useDocument} from "react-firebase-hooks/firestore";
import {getInfoDialog} from "../../api/firestore";


const initialState = {
    dialogs: [],
    selectedIndex: null,
    search: ''
};


const reducer = (state, {type, dialogs, value, id, name, phone, imgUrl, lastMessage, timeLastMessage, numberOfUnreadMessages, d, idDialogInfo}) => {
    switch (type) {
        case GET_DIALOGS:
            return {
                ...state,
                dialogs: dialogs
            };
        case SEARCH_IN_LIST_DIALOGS:
            return {
                ...state,
                search: value
            };
        case SET_ACTIVE_DIALOG:
            return {
                ...state,
                search: "",
                selectedIndex: id,
                idDialogInfo
            };
        case ADD_DIALOG:
            return {
                ...state,
                dialogs: [
                    ...state.dialogs, {
                        id, name, phone, imgUrl, lastMessage, timeLastMessage, numberOfUnreadMessages
                    }
                ]
            };
        case REMOVE_DIALOG:
            return {
                ...state,
                dialogs: [...state.dialogs].filter(dialog => dialog.id !== id)
            };
        case "LOAD_DIALOG":
            return {
                ...state,
                dialogs: [...state.dialogs, d]
            };
        default:

            throw new Error();
    }
};


export const useDialogs = (phoneNumber) => {
    const [state, dispatchDialogs] = useReducer(reducer, initialState);
    const query =phoneNumber && firebase.db.doc(`users/${phoneNumber}`);
    const [value, loading, error] = useDocument(query);

    useEffect(() => {


            if (loading) {
                console.log("loading")
            } else if (error) {
                console.log("error")
            } else if (value) {
                const {dialogs} = value.data();
                dialogs.map(dialog => getInfoDialog(dialog)).map(dialog => dialog.then(data => {
                        const {idLastMessage, photoURL, userName,
                            lastMessage, timeLastMessage,
                            authorLastMessage,targetUserId, dialogId} = data;
                        const d = {idLastMessage, photoURL, name: userName, lastMessage, timeLastMessage, authorLastMessage, idDialogInfo: targetUserId, id:dialogId};

                        if (state.dialogs.length === 0) {
                            dispatchDialogs({type: "LOAD_DIALOG", d})
                        } else if
                        (!(state.dialogs.find(o => o.timeLastMessage === timeLastMessage))) {
                            dispatchDialogs({type: "LOAD_DIALOG", d})
                        }
                    })
                )
            }
        }, [value, loading, error]
    );


    // useEffect(() => {
    //     let initialDialogs = initialState.dialogs;
    //     if (state.search) initialDialogs = getDialogsBySearch(initialDialogs, state.search);
    //     dispatchDialogs(getDialogs(initialDialogs));
    //
    // }, [state.search]);

    return {
        ...state,
        dispatchDialogs
    };

};
