import React, { useContext } from "react";
import Header from "./Header/Header";
import { DialogsColumn } from "./DialogsColumn";
import { HistoryColumn } from "./HistoryColumn";
import { VerticalWrap } from "./VerticalWrap";
import { HorizontalWrap } from "./HorizontalWrap";

import { wrapPageStyle, pageContextStyle } from "./styles";

import { ModalWrap } from "./ModalWrap";
import { About } from "../About";
import { Profile } from "../MyProfile";
import { Contacts } from "../Contacts";
import { GroupPage } from "../Group";
import { User } from "../User";
import { StoreContext } from "../../store";

export const MainPage = () => {
    const {
        dialogs,
        openModal,
        handleCloseModal,
        profileInfo,
        changeProfileInfo,
        activeDialogInfo,
    } = useContext(StoreContext);


    const switchModal = () => {
        switch (openModal.name) {
            case "New group":
                return <GroupPage onClose={handleCloseModal}/>;
            case "Contacts":
                return <Contacts onClose={handleCloseModal}/>;
            case "My profile":
                return <Profile profileInfo={profileInfo} changeProfileInfo={changeProfileInfo}
                                onClose={handleCloseModal}/>;
            case "About":
                return <About onClose={handleCloseModal}/>;
            case "User":
                return <User activeDialogInfo={activeDialogInfo} onClose={handleCloseModal}/>;
            default:
                return "Error";
        }
    };

    return (
        <React.Fragment>
            <VerticalWrap style={wrapPageStyle}>
                <Header/>
                <HorizontalWrap style={pageContextStyle}>
                    <DialogsColumn notFound={dialogs.length === 0}/>
                    <HistoryColumn selected={activeDialogInfo && !(Object.keys(activeDialogInfo).length === 0)}/>
                </HorizontalWrap>
            </VerticalWrap>

            {openModal.open &&
            <ModalWrap open={openModal.open} handleClose={handleCloseModal}>
                {switchModal()}
            </ModalWrap>
            }

        </React.Fragment>
    );
};

