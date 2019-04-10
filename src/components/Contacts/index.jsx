import React from "react";
import {
    ContactList,
    Header,
    Navigate,
    Search
} from "./ComponentsContacts";

import "./style.css";


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
