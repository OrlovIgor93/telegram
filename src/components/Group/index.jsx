import React from 'react';
import {
    ContactList,
    Header,
    Navigate,
    Search
} from "./ComponentsGroup";
import Style from './style.js'

import './style.css';


export const GroupPage = () => (
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
