import React from "react";
import "./style.css";
import {Link} from "react-router-dom";
export const AboutBody = () => (
    <div style={{ background:"white"}} >
        <div className="profile_wrapper">
            <div className="section">
                <p>Just another free messaging app based on Telegram API made by three future JS geniuses.</p>
            </div>
        </div>
        <div className="footer_wrap">
            <div className="footer">
                <Link to="/">Link 1</Link>
                <Link to="/">Link 2</Link>
            </div>
        </div>
    </div>
);