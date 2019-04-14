import React from "react";
import {
    Header,
    Navigate,
    Search
} from "./ComponentsContacts";
import ContactList from '../Group/ComponentsGroup/ContactList'

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
