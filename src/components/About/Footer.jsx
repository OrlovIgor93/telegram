import React from "react";

import {Link} from "react-router-dom";
import {LeraStyle} from "../LeraStyles/LeraStyles";

export const Footer = () =>
    <div className="footer_wrap">
    <div style={LeraStyle.FooterLinks}>
        <Link to="/settings">Settings</Link>
        <Link to="/contact" style={LeraStyle.LinksRight}>Profile</Link>
    </div>
</div>;

