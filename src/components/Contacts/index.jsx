import React from "react";
import { Avatar } from "../Avatar";
import { Header } from "./ComponentsContacts/Header";
import { Search } from "./ComponentsContacts/Search";
import { ContactList } from "./ComponentsContacts/ContactList";
import { Navigate } from "./ComponentsContacts/Navigate";

import "./style.css";
import "../MainPage/style.css";

export const Contacts = () => (
    <Wrap>
        <Header />
        <Search />
        <ContactList />
        <Navigate />
    </Wrap>
);

export const Wrap = props => (
    <div className="head_group">
        <div className="wrap_group">
            {props.children}
        </div>
    </div >
);
