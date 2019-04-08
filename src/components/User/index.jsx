import React from "react";
import "./style.css";

import {ContactHeading} from "./ContactHeading";
import {ContactBody} from "./ContactBody";
import {Wrapper} from "../About";

export const User = () => (
    <Wrapper>
        <ContactHeading/>
        <ContactBody/>
    </Wrapper>
);

