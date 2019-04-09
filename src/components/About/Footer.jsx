import React from "react";

import {Link} from "react-router-dom";
import {style} from "../LeraStyles/style";

export const Footer = () =>
    <div className="footer_wrap">
    <div style={style.footerLinks}>
        <Link to="/settings">Settings</Link>
        <Link to="/contact" style={style.linksRight}>Profile</Link>
    </div>
</div>;

