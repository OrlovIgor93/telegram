import React from "react";

import {ProfileHeading} from "./ProfileHeading"
import {ProfileBody} from "./ProfileBody";
import {Wrapper} from "../About";

export const Profile = () => (
    <Wrapper>
        <ProfileHeading/>
        <ProfileBody/>
    </Wrapper>
);

