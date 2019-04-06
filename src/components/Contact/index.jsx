import React from "react";
import "./style.css";

import {ContactHeading} from "./ContactHeading";
import {ContactBody} from "./ContactBody";

export const Contact = () => (
    <div className="wrapper">
        <ContactHeading/>
        <ContactBody/>
    </div>
);

