import React from "react";
import "./style.css";
import {LeraStyle} from "../LeraStyles/LeraStyles";
import {UserOptions} from "../Settings/UserOptions";

export const ContactBody = () => {
    return (
        <div style={LeraStyle.BodyBackground} >
            <div style={LeraStyle.BodyMargins}>
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
            <UserOptions/>
        </div>
    )
};