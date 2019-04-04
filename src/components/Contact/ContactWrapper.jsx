import React from "react";
import "./style.css";
import {ContactHeading} from "./ContactHeading";
import {ContactBody} from "./ContactBody";

export const ContactWrapper = () => (
    <div className="wrapper">
        <ContactHeading/>
        <ContactBody/>
    </div>
);