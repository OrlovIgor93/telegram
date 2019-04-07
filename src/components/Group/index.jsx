import React from "react";
import { Header } from "./ComponentsGroup/Header";
import { Search } from "./ComponentsGroup/Search";
import { ContactList } from "./ComponentsGroup/ContactList";
import { Navigate } from "./ComponentsGroup/Navigate";

import "./style.css";
import "../MainPage/style.css";

export const GroupPage = () => (
    <div className="head_group">
        <div className="wrap_group">
            <Header />
            <Search />
            <ContactList />
            <Navigate />
        </div>
    </div>
);
