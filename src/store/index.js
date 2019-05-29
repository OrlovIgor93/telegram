import {useDialogs} from "../hooks/useDialogs";
import {usePortals} from "../hooks/usePortals";
import React, {useEffect} from "react";
import {useUser} from "../hooks/useUser";
import {useHistoryDialog} from "../hooks/useHistoryDialog";

const StoreContext = React.createContext({});

const StoreProvider = ({children}) => {
    const {authenticated, user, initialisingUser, dispatchUser} = useUser();
    const phoneNumber = user && user.phoneNumber;

    const {dialogs, search, selectedIndex, idDialogInfo, dispatchDialogs} = useDialogs(phoneNumber);
    const {
        messagesActiveDialog, activeDialogInfo, searchValueInDialog,
        handleSearchForDialog,
        handlerBlurSearchDialog
    } = useHistoryDialog(selectedIndex, idDialogInfo);
    const {openModal, anchorLeftMenu, setAnchorLeftMenu, handleClickOpenModal, handleCloseModal,} = usePortals();


    const _mapStateToProps = {
        dialogs, search, selectedIndex,
        messagesActiveDialog, activeDialogInfo, searchValueInDialog,
        authenticated, user, initialisingUser
    };

    const _dispatchFunctions = {
        dispatchDialogs,
        handleSearchForDialog,
        dispatchUser,
        handlerBlurSearchDialog,
    };

    useEffect(() => {
        if (authenticated) console.log(_mapStateToProps)
    }, [authenticated, _mapStateToProps]);

    return (
        <StoreContext.Provider value={{
            openModal,
            anchorLeftMenu,
            setAnchorLeftMenu,
            handleClickOpenModal,
            handleCloseModal, ..._mapStateToProps, ..._dispatchFunctions
        }}>
            {children}
        </StoreContext.Provider>
    );
};
export {StoreContext, StoreProvider};