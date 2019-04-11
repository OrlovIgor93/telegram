import React from 'react';
import {Link} from "react-router-dom";

import Style from '../style.js'

export const Header = () => (
    <div style={Style.titleWrapGroupClass}>
        <div style={Style.contactContactsClass}>Contacts</div>
        <div style={Style.editContactClass}>Edit</div>
        <div style={Style.closeClass}><Link style={Style.closeClass} to="/">Close</Link></div>
    </div>
);

export default Header

