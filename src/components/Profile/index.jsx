import React from "react";
import "./style.css";
import { Avatar } from "../Avatar";
const Profile = () => {
    return (
        <div className="wrap">
            <div className="head">
                <div className="title">
                    <div className="title1">My Profile</div>
                    <div className="title2">Close</div>
                    <div className="title2">Edit</div>
                </div>
                <div className="photo_wrap">
                    <div className="telegram_logo">
                        <Avatar style={{ height: 48, width: 48 }}>dp</Avatar>
                    </div>
                    <div className="profile">
                        <div className="profile_name">My Name</div>
                        <div className="profile_description">online status</div>
                    </div>
                </div>
            </div>
            <div className="profile_wrap">
                <div className="phone">
                    <p>Phone number</p>
                </div>
                <div className="username">
                    <p>Username</p>
                </div>
            </div>
            <br/>
            <div className="container">
                <div className="box">
                    <div className="desc">
                        <p>Notifications</p>
                    </div>
                    <div>
                        <label className="switch">
                            <input type="checkbox"/>
                            <span className="slider round"/>
                        </label>
                    </div>
                </div>
                <ul className="options">
                    <li><a>Share contact</a></li>
                    <li><a>Delete contact</a></li>
                    <li><a>Clear history</a></li>
                    <li><a>Delete conversation</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Profile;