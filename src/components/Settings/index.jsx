import React from "react";
import "./style.css";
import {Avatar} from "../Avatar";
export const Settings = () => {
    return (
        <div className="wrap2">
            <div className="head">
                <div className="title">
                    <div className="title1">Settings</div>
                    <div className="title2">Close</div>
                    <div className="title2">Edit</div>
                </div>
                <div className="photo_wrap">
                    <div className="telegram_logo">
                        <Avatar style={{ height: 48, width: 48 }}>dp</Avatar>
                    </div>
                    <div className="profile">
                        <div className="profile_name">Name</div>
                        <div className="profile_description">online status</div>
                    </div>
                </div>
            </div>
            <div className="profile_wrap">
                <div className="phone">
                    <div className="icon_phone"/>
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
                        <p>Desktop notifications</p>
                    </div>
                    <div>
                        <label className="switch">
                            <input type="checkbox"/>
                            <span className="slider round"/>
                        </label>
                    </div>
                </div>
                <div className="box">
                    <div className="desc">
                        <p>Background notifications</p>
                    </div>
                    <div>
                        <label className="switch">
                            <input type="checkbox"/>
                            <span className="slider round"/>
                        </label>
                    </div>
                </div>
                <div className="box">
                    <div className="desc">
                        <p>Message preview</p>
                    </div>
                    <div>
                        <label className="switch">
                            <input type="checkbox"/>
                            <span className="slider round"/>
                        </label>
                    </div>
                </div>
                <div className="box">
                    <div className="desc">
                        <p>Sound</p>
                    </div>
                    <div>
                        <label className="switch">
                            <input type="checkbox"/>
                            <span className="slider round"/>
                        </label>
                    </div>
                    <div className="tg_slider_wrap">
                        <div className="tg_slider_thumb"/>
                        <div className="tg_slider_track">
                            <div className="tg_slider_track_fill"/>
                        </div>
                    </div>
                </div>
                <ul className="options">
                    <li><a href="#">Share contact</a></li>
                    <li><a href="#">Delete contact</a></li>
                    <li><a href="#">Clear history</a></li>
                    <li><a href="#">Delete conversation</a></li>
                </ul>
            </div>
        </div>
    );
};
