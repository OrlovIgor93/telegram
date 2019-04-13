import React from 'react';

import '../style.css'
import {Link} from "react-router-dom";

export const LearnMore = () => (
    <div className="footer_wrap_login">
        <p className="welcome-footer p_login">
            Welcome to the EPAM telegram web-client.
        </p>
        <Link style={{color: 'lightblue'}} to="about">
            ABOUT
        </Link>
    </div>);
