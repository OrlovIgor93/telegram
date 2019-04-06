import React from 'react';
import { Avatar } from "../Avatar";
import {Link} from "react-router-dom";

export const SettingsHeader = () => (

<div className="head">
    <div className="titles">
        <div className="title1">Settings</div>
        <div className="title2">
            <Link to="/settings">Edit</Link>
        </div>
        <div className="title3">
            <Link to="/">Close</Link>
        </div>
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
);