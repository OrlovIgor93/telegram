import React from "react";
import "./style.css";

import {AboutHeading} from "./AboutHeading";
import {AboutBody} from "./AboutBody";

export const About = () => (
    <Wrapper>
        <AboutHeading/>
        <AboutBody/>
    </Wrapper>
);
export const Wrapper = props => (
    <div className="wrapper">
        {props.children}
    </div>
);
