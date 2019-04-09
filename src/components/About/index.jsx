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
    <div style={{
        width: 480+'px',
        display: 'flex',
        flexDirection: 'column',
        margin: 'auto'}}>
        {props.children}
    </div>
);
