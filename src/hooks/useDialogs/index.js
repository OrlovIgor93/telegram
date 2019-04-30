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


export const useDialogs = () => {
    const [state, dispatchDialogs] = useReducer(reducer, initialState);

    useEffect(() => {
        let initialDialogs = initialState.dialogs;
        if (state.search) initialDialogs = getDialogsBySearch(initialDialogs, state.search);
        dispatchDialogs(getDialogs(initialDialogs));

    }, [state.search]);

    return {
        ...state,
        dispatchDialogs
    };

};