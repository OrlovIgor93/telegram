import React from "react";
import "./style.css";

export const ContactBody = () => (
    <div>
        <div className="profile_wrap">
            <div className="phone">
                <p>Phone number</p>
            </div>
            <div className="username">
                <p>Username</p>
            </div>
            <div className="contain" >
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
);