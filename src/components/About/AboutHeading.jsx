import React from "react";
import "./style.css";
import {Link} from "react-router-dom";

export const AboutHeading = () => (
    <div className="head">
        <div className="title">
            <div className="title1">About</div>
            <div className="title2"><Link to="/">Close</Link></div>
        </div>
        <div className="photo_wrap">
            <div className="telegram_logo">
                <img src="https://web.telegram.org/img/Telegram72.png" alt="logo"/>
            </div>
            <div className="profile">
                <div className="profile_name">Epam Telegram</div>
                <div className="profile_description">Version 0.1</div>
            </div>
        </div>
    </div>
);
