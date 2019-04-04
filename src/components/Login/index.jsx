import React from "react";
import {Header} from "./ComponentsLogin/Header.jsx";
import {Login} from "./ComponentsLogin/Login.jsx";
import {LearnMore} from "./ComponentsLogin/LearnMore.jsx";
import "./style.css";

export const LoginPage = () => (
    <div className="head_login">
        <div className="wrap_login">
            <Header/>
            <Login/>
            <LearnMore/>
        </div>
    </div>
);

