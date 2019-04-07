import React from "react";
import "./style.css";

export const ContactBody = () => {
    return (
    <div style={{ background:"white"}} >
        <div className="profile_wrap">
            <div className="phone">
                <div className="icon_phone"/>
                <p>Phone number</p>
            </div>
            <div className="username">
                <div className="icon_user"/>
                <p>Username</p>
            </div>
            <div className="contain">
                <div className="icon_notify"/>
                <p>Notifications</p>
                <div className="toggle">
                    <label className="switch">
                        <input type="checkbox"/>
                        <span className="slider round"/>
                    </label>
                </div>
            </div>
        </div>
        <ul className="options">
            <li><a>Share contact</a></li>
            <li><a>Delete contact</a></li>
            <li><a>Clear history</a></li>
            <li><a>Delete conversation</a></li>
        </ul>
    </div>
)
};