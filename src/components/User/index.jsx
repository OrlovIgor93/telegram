import React from "react";
import "./style.css";

import {ContactHeading} from "./ContactHeading";
import {ContactBody} from "./ContactBody";

export const User = () => (
    <div className="wrapper">
        <ContactHeading/>
        <ContactBody/>
    </div>
);

