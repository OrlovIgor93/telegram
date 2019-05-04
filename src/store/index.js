import { useDialogs } from "../hooks/useDialogs";
import { usePortals } from "../hooks/usePortals";
import React, { useEffect } from "react";
import { useUser } from "../hooks/useUser";
import { useHistoryDialog } from "../hooks/useHistoryDialog";

const StoreContext = React.createContext({});

const StoreProvider = ({ children }) => {
    const { dialogs, search, selectedIndex, dispatchDialogs } = useDialogs();
    const {
            messagesActiveDialog, activeDialogInfo, searchValueInDialog,
            handleSearchForDialog,
            handlerBlurSearchDialog
        } = useHistoryDialog(selectedIndex);
    const { openModal, anchorLeftMenu, setAnchorLeftMenu, handleClickOpenModal, handleCloseModal, } = usePortals();
    const { profileInfo, changeProfileInfo } = useUser();


    const _mapStateToProps = {
                            dialogs, search, selectedIndex,
                            messagesActiveDialog, activeDialogInfo, searchValueInDialog,
                            profileInfo,
    };

    const _dispatchFunctions = {
                                dispatchDialogs,
                                handleSearchForDialog,
                                changeProfileInfo,
                                handlerBlurSearchDialog,
    };

    useEffect(() => console.log(_mapStateToProps), [ _mapStateToProps ]);

    return (
        <StoreContext.Provider value={{ openModal, anchorLeftMenu, setAnchorLeftMenu, handleClickOpenModal, handleCloseModal,..._mapStateToProps, ..._dispatchFunctions }}>
            {children}
        </StoreContext.Provider>
    );
};
export { StoreContext, StoreProvider };