import React from "react";
import {Link} from "react-router-dom";

import {Description} from "../Settings/Description"
import {style} from "../LeraStyles/style";

export const ProfileHeading = () => (
    <div style={{
        backgroundColor: 'rgb(85, 128, 163)',
        color: '#fff',
        paddingLeft: 28 + 'px'
    }}>
        <div style={style.titles}>
            <div>My Profile</div>
             <div style={style.linksRight}>
                <Link to="/">Close</Link></div>
        </div>
        <Description/>
    </div>
);