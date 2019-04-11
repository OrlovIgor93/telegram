import React from 'react';
import Style from '../style.js';
import {Link} from "react-router-dom";

export const Header = () => (
    <div style={Style.titleWrapGroupPageClass}>
        <div style={Style.newGroupPageClass}>New Group</div>
        <div style={Style.closeGroupPageClass}><Link style={Style.closeGroupPageClass} to="/">Close</Link></div>
    </div>
);

export default Header
