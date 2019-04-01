import React from "react";
import "./aboutPage.css";
const aboutPage = () => {
    return (
<div className="wrap">
    <div className="head">
        <div className="title">
            <div className="title1">About</div>
            <div className="title2">Close</div>
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
    <div className="profile_wrap">
        <div className="section">
            <p>Just another free messaging app based on Telegram API made by three future JS geniuses.</p>
        </div>
    </div>
    <div className="footer_wrap">
        <div className="footer">
            <a className="link1" href="#" target="_blank">Link 1</a>
            <a className="link2" href="#" target="_blank">Link 2</a>
        </div>
    </div>
</div>
);
};

export default aboutPage;