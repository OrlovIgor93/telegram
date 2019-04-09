import React from "react";

import {AboutHeading} from "./AboutHeading";
import {AboutBody} from "./AboutBody";
import {LeraStyle} from "../LeraStyles/styles";

export const About = () => (
    <Wrapper>
        <AboutHeading/>
        <AboutBody/>
    </Wrapper>
);
export const Wrapper = props => (
    <div style={LeraStyle.Wrapper}>
        {props.children}
    </div>
);
