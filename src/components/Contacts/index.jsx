import React from "react";
import { Avatar } from "../Avatar";
import { Header } from "./ComponentsContacts/Header";
import { Search } from "./ComponentsContacts/Search";
import { ContactList } from "./ComponentsContacts/ContactList";
import { Navigate } from "./ComponentsContacts/Navigate";

import "./style.css";
import "../MainPage/style.css";

export const Contacts = () => (
    <div className="head_group">
        <div className="wrap_group">
            <Header />
            <Search />
            <ContactList />
            <Navigate />
        </div>
    </div>
);
