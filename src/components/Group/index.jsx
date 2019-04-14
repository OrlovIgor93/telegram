import React from 'react';
import {
    Header,
    Navigate,
    Search
} from "./ComponentsGroup";
import { ContactList } from './ComponentsGroup/ContactList'
import Style from './style.js'

import './style.css';


export const GroupPage = () => (
    <Wrap>
        <Header />
        <Search />
        <ContactList editMode={false} />
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
