import React, { useContext, useState } from "react";
import {
    NewContactDialog,
    Search,
    ContactList
} from "./ComponentsContacts"

import Style from "./style.js"
import { Button } from "@material-ui/core"

import { listDialogs } from "../../mock/listDialogs"
import firebase from "../../api/firebase";
import { getUserByPhoneNumber } from "../../api/firestore";
import { VerticalWrap } from "../common/VerticalWrap";
import { Header } from "../common/Header";
import AddIcon from "@material-ui/core/SvgIcon/SvgIcon";
import { HorizontalWrap } from "../common/HorizontalWrap";
import { StoreContext } from "../../store";

export const Contacts = ({ onClose }) => {
    const {user: {phoneNumber, displayName}} = useContext(StoreContext);
    const [openModal, setOpenModal] = useState(false);
    const [findPhoneNumber, setPhoneNumber] = useState("");
    const [foundUserInfo, setFoundUserInfo] = useState(null);


    const addContact = (e) => {
        e.preventDefault();
        getUserByPhoneNumber(findPhoneNumber, phoneNumber, displayName).then((doc) => {
            if (doc.exists) {
                const info = doc.data();
                console.log("Document data:", info);
                setFoundUserInfo(info)
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch((error)=> {
            console.log("Error getting document:", error);
        });
    };

    const onChangePhoneNumber = ({ target: { value } }) => {
        setPhoneNumber(value);
    };


    return (
        <VerticalWrap>
            <Header title="Contacts" onClose={onClose}>
                <Button color="inherit" onClick={() => setOpenModal(true)}>
                    Add contact
                </Button>

            </Header>

            <NewContactDialog
                open={openModal}
                onCancel={() => setOpenModal(false)}
                onSubmit={addContact}
                phoneNumber={findPhoneNumber}
                onChangePhoneNumber={onChangePhoneNumber}/>
        </VerticalWrap>
    )

};