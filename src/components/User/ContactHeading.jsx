import React from "react";
import {Link} from "react-router-dom";

import {Description} from "../Settings/Description"
import {style} from "../LeraStyles/style";

export const ContactHeading = () => (
    <div style={{
        backgroundColor: 'rgb(85, 128, 163)',
        color: '#fff',
        paddingLeft: 28 + 'px'
    }}>
        <div style={style.titles}>
            <div>Contact Info</div>
            <div style={style.linksRight}>
                <Link to="/settings">Edit</Link>
            </div>
            <div>
                <Link to="/">Close</Link></div>
        </div>
        <Description/>
    </div>
);