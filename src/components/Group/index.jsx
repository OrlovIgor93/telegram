import React from 'react';
import { Header } from './ComponentsGroup/Header';
import { Search } from './ComponentsGroup/Search';
import { ContactList } from './ComponentsGroup/ContactList';
import { Navigate } from './ComponentsGroup/Navigate';
import Style from './style.js'

import './style.css';
import '../MainPage/style.css';

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
