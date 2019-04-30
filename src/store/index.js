import {useDialogs} from "../hooks/useDialogs";
import {usePortals} from "../hooks/usePortals";
import React, {useEffect} from "react";
import {useUser} from "../hooks/useUser";
import {useHistoryDialog} from "../hooks/useHistoryDialog";

const StoreContext = React.createContext({});

const StoreProvider = ({ children }) => {
    const { dialogs, search, selectedIndex,dispatchDialogs  } = useDialogs();
    const { messagesActiveDialog, activeDialogInfo, searchValueInDialog, handleSearchForDialog, setDialog,changeActiveDialog} = useHistoryDialog();
    const { openModal, anchorLeftMenu, setAnchorLeftMenu, handleClickOpenModal, handleCloseModal, }= usePortals();
    const { profileInfo, changeProfileInfo } = useUser();

    const value= {
        profileInfo,
        changeProfileInfo,
        dialogs,
        search,
        selectedIndex,
        dispatchDialogs,
        openModal,
        anchorLeftMenu,
        setAnchorLeftMenu,
        handleClickOpenModal,
        handleCloseModal,
        messagesActiveDialog,
        activeDialogInfo,
        searchValueInDialog,
        handleSearchForDialog,
        setDialog,
        changeActiveDialog,
    };
    useEffect(() => console.log({value }));
// Render state, dispatch and special case actions
return (
    <StoreContext.Provider value={value}>
        {children}
    </StoreContext.Provider>
);
};
export { StoreContext, StoreProvider };