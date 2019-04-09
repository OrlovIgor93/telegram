import React from "react";

import {AboutHeading} from "./AboutHeading";
import {AboutBody} from "./AboutBody";
import {style} from "../LeraStyles/style";

export const About = () => (
    <Wrapper>
        <AboutHeading/>
        <AboutBody/>
    </Wrapper>
);
export const Wrapper = props => (
    <div style={style.wrapper}>
        {props.children}
    </div>
);
