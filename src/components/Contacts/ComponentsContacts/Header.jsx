import React from 'react';
import {Link} from "react-router-dom";

import '../style.css'

export const Header = () => (
    <div className="title_wrap_group">
        <div className="contact-contacts">Contacts</div>
        <div className="edit-contact">Edit</div>
        <div className="close"><Link className="close" to="/">Close</Link></div>
    </div>
);

export default Header

