import React from "react";
import "./style.css";
import {Link} from "react-router-dom";
import {Settingsstyle} from "../Settings/Titles";
import {Description} from "../Settings/Description"

export const ContactHeading = () => (
    <div style={{
        backgroundColor: 'rgb(85, 128, 163)',
        color: '#fff',
        paddingLeft: 28 + 'px'
    }}>
        <div style={Settingsstyle.Titles}>
            <div>Contact Info</div>
            <div style={Settingsstyle.LinksRight}>
                <Link to="/settings">Edit</Link>
            </div>
            <div>
                <Link to="/">Close</Link></div>
        </div>
        <Description/>
    </div>
);