import React, { useContext, useState } from "react";

import { ProfileHeading } from "./ProfileHeading";
import { ProfileBody } from "./ProfileBody";
import Paper from "@material-ui/core/Paper";
import { StoreContext } from "../../store";
import firebase from "../../api/firebase";
import { loginSuccess, logOutSuccess } from "../../actions/actionCreatorUser";
import { Spinner } from "../common/Spinner";
import ChangeMyInfo from "./ChangeMyInfo";

export const Profile = () => {
    const { user, dispatchUser, handleCloseModal } = useContext(StoreContext);
    const [openModal, setOpenModal] = useState(false);
    const [firstName, lastName] = user.displayName.split(" ");
    const [newFirstName, setFirstName] = useState(firstName);
    const [newLastName, setLastName] = useState(lastName);
    const [loading, setLoading] = useState(false);

    const handleChangeInput = name => ({ target: { value } }) => {
        switch (name) {
            case "firstName":
                setFirstName(value);
                break;
            case "lastName":
                setLastName(value);
                break;
            default:
                break;
        }
    };

    async function handleSave() {
        const newUserName = (newFirstName && newLastName)?`${newFirstName} ${newLastName}`:newFirstName||newLastName;
        setOpenModal(false);
        setLoading(true);
        await firebase.updateCurrentUser(newUserName)
            .then(() => firebase.getCurrentUser())
            .catch(error => console.log(error))
            .then(user => dispatchUser(loginSuccess(user)))
            .then(() =>{ setLoading(false)})
    }

    async function handleLogOut() {
        await firebase.logout()
            .then(()=>dispatchUser(logOutSuccess()))
            .catch(error=>console.log(error))
            .then(()=>handleCloseModal());
    }

    if (loading) {
        return <Spinner/>
    }
    return (
        <Paper style={{ padding: 0, width: "480px" }}
               elevation={1}>
            <ProfileHeading user={user} onClose={handleCloseModal}/>
            <ProfileBody
                user={user}
                setOpenModal={setOpenModal}
                handleLogOut={handleLogOut}
            />

            <ChangeMyInfo
                open={openModal}
                firstName={newFirstName}
                lastName={newLastName}
                handleChangeInput={handleChangeInput}
                handleSave={handleSave}
            />
        </Paper>

    )
};

