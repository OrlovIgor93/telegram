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


const initialState = {
    dialogs: listDialogs,
    selectedIndex: null,
    search: ''
};


const reducer = (state, {type, dialogs, value, id, name, phone, imgUrl, lastMessage, timeLastMessage, numberOfUnreadMessages}) => {
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
        default:
            throw new Error();
    }
};


export const useDialogs = (phoneNumber) => {

    const [state, dispatchDialogs] = useReducer(reducer, initialState);
    const { error, loading, value } = useCollection(
        firebase.db.collection('users').doc(phoneNumber?phoneNumber:"123")
    );

    useEffect(() => {
        if (loading) {
           console.log("loading")
        } else if (error) {
            console.log("error")
        } else {
            //
            // const docs = value.docs.map(doc => (firebase.db.collection('users').doc( doc.data())))
            // console.log('docs', docs)
            // dispatchDialogs(getDialogs(docs));
            const {dialogs} = value.data();
            const myListDialogs = dialogs.map( async (doc)=>{
                const {userName, phoneNumber} = await firebase.db.collection('users').doc(doc.dialogInfo).get()
                    .then((data)=>data.data() );
                console.log('userName, phoneNumber',userName, phoneNumber);





                const {textMessage, id} = await  firebase.db.collection('dialogs').doc(doc.dialogId).get()
                    .then( (snapshot) => {

                            // doc.data() is never undefined for query doc snapshots
                        const {messages} =  snapshot.data();
                            console.log(snapshot.id, " => ",  messages);
                            return messages.slice(-1,1)

                    });
return {name: userName,phone: phoneNumber, lastMessage: null,imgUrl:null,timeLastMessage: null, numberOfUnreadMessages: null }


            });
            console.log('myListDialogs', myListDialogs)
             console.log('value', dialogs)
        }


        }, [phoneNumber,value]);


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