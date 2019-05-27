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
import {getMyDialogs, loadDialogData, useLatestDocument} from "../../api/firestore";


const initialState = {
    dialogs: [],
    selectedIndex: null,
    search: ''
};


const reducer = (state, {type, dialogs, value, id, name, phone, imgUrl, lastMessage, timeLastMessage, numberOfUnreadMessages, d}) => {
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
                selectedIndex: id
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

    const {dialogs=[], loading, error,} = useLatestDocument(phoneNumber);
    // const {error, loading, value} = useCollection(
    //     firebase.db.collection('users').doc(phoneNumber ? phoneNumber : "123")
    // );

    useEffect(() => {


console.log('dial12121', dialogs)

            getMyDialogs(dialogs).map(e=>e.then(d=>dispatchDialogs({type:"LOAD_DIALOG", d })));



            // const myListDialogs = dialogs.map(async (doc) => {  .then((data)=> data.map((e)=>e));
            //     const {userName, phoneNumber} = await firebase.db
            //         .collection('users')
            //         .doc(doc.dialogInfo)
            //         .get()
            //         .then( (data) =>  data.data());
            //
            //     const {textMessage, id} = await  firebase.db
            //         .collection('dialogs')
            //         .doc(doc.dialogId)
            //         .get()
            //         .then( (data) =>{
            //             const { messages } =  data.data();
            //             console.log('textMessage', messages);
            //
            //             return {textMessage: messages.textMessage, id: data.id}
            //             });
            //
            //     const data = {
            //         name: userName,
            //         phone: phoneNumber,
            //         lastMessage: textMessage,
            //         imgUrl: null,
            //         timeLastMessage: id,
            //         numberOfUnreadMessages: null
            //     };
            //
            //     return data
            // }
            // );

            // dispatchDialogs(list);



    }, [phoneNumber, dialogs]);


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