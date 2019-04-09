import React from "react";
import "./style.css";
import {Link} from "react-router-dom";
import {Settingsstyle} from "../Settings/Titles";

export const Footer = () => <div className="footer_wrap">
    <div style={styles.FooterLinks}>
        <Link to="/settings">Settings</Link>
        <Link to="/contact" style={Settingsstyle.LinksRight}>Profile</Link>
    </div>
</div>;

const styles = {
    FooterLinks: {
        display: 'flex',
        justifyContent: 'spaceBetween',
        padding: 20+'px',
        color: 'gray',
    }
};