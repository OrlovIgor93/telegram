import {useEffect, useReducer} from 'react';
import {listDialogs} from '../../mock/listDialogs'
import {
    GET_DIALOGS,
    SEARCH_IN_LIST_DIALOGS,
    SET_ACTIVE_DIALOG,
    ADD_DIALOG,
    REMOVE_DIALOG,
} from '../../constants';
import {getDialogs} from '../../actions/actionCreatorDialogs.js'
import {getDialogsBySearch} from '../../helpers/mainPageHelper'
import firebase from "../../api/firebase";
import {initialisingUser, loginSuccess} from "../../actions/actionCreatorUser";
import {useCollection} from "react-firebase-hooks/firestore";
import {Reference as databaseRef} from "firebase";
import {getInfoDialog, getMyDialogs, loadDialogData, useLatestDocument} from "../../api/firestore";


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
    const query = phoneNumber && firebase.db.collection('users').doc(phoneNumber);
    const {value, loading, error} = useCollection(query);

    useEffect(() => {


            if (loading) {
                console.log("loading")
            } else if (error) {
                console.log("error")
            } else if (value) {
                const {dialogs} = value.data();
                dialogs.map(dialog => getInfoDialog(dialog)).map(dialog => dialog.then(data => {
                        const {idLastMessage, photoURL, userName, lastMessage, timeLastMessage, authorLastMessage,targetUserId} = data;
                        const d = {idLastMessage, photoURL, name: userName, lastMessage, timeLastMessage, authorLastMessage, idDialogInfo: targetUserId};

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

export const getUserData = async (refUser,) => {
    const ref = await firebase.db.doc(refUser.path).get().then((d) => d.data());
    return ref;

};