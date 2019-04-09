import React from "react";
import "./style.css";
import {Link} from "react-router-dom";

import {Description} from "../Settings/Description"
import {LeraStyle} from "../LeraStyles/LeraStyles";

export const ContactHeading = () => (
    <div style={{
        backgroundColor: 'rgb(85, 128, 163)',
        color: '#fff',
        paddingLeft: 28 + 'px'
    }}>
        <div style={LeraStyle.Titles}>
            <div>Contact Info</div>
            <div style={LeraStyle.LinksRight}>
                <Link to="/settings">Edit</Link>
            </div>
            <div>
                <Link to="/">Close</Link></div>
        </div>
        <Description/>
    </div>
);