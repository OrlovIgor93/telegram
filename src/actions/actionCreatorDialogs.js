import {
    GET_DIALOGS,
    SEARCH_IN_LIST_DIALOGS,
    SET_ACTIVE_DIALOG,
    ADD_DIALOG,
    REMOVE_DIALOG,
} from '../constants';

export const getDialogs = (dialogs) => ({
    type: GET_DIALOGS,
    dialogs,
});

export const searchInListDialogs = value => ({
    type: SEARCH_IN_LIST_DIALOGS,
    value,
});

export const setActiveDialog = (id,idDialogInfo) => ({
    type: SET_ACTIVE_DIALOG,
    id,
    idDialogInfo
});

export const addDialog = (id, name, phone, imgUrl, lastMessage, timeLastMessage, numberOfUnreadMessages) => ({
    type: ADD_DIALOG,
    id,
    name,
    phone,
    imgUrl,
    lastMessage,
    timeLastMessage,
    numberOfUnreadMessages,
});

export const removeDialog = (id) => ({
    type: REMOVE_DIALOG,
    id,
});

