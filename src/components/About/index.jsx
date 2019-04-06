import React from "react";
import "./style.css";

import {AboutHeading} from "./AboutHeading";
import {AboutBody} from "./AboutBody";

export const About = () => (
    <div className="wrapper">
        <AboutHeading/>
        <AboutBody/>
    </div>
);

