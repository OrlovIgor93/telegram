import React from 'react';
import { Link } from "react-router-dom";
import Style from '../style.js'

export const Navigate = () => (
    <div style={Style.footWrapGroupClass}>
         <Link to="/addnewcontact"><div style={Style.newContactClass}>New contact</div></Link>
    </div>
);

export default Navigate
