import React from "react";
import "./style.css";
import {style} from "../LeraStyles/style";
import {UserOptions} from "../Settings/UserOptions";

export const ContactBody = () => {
    return (
        <div style={style.bodyBackground} >
            <div style={style.bodyMargins}>
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