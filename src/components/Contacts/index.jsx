import React from "react";
import {
    ContactList,
    Header,
    Navigate,
    Search
} from "./ComponentsContacts";

import Style from './style.js'


export const Contacts = () => (
    <Wrap>
        <Header />
        <Search />
        <ContactList />
        <Navigate />
    </Wrap>
);

export const Wrap = props => (
    <div style={Style.headGroupClass}>
        <div style={Style.wrapGroupClass}>
            {props.children}
        </div>
    </div >
);
