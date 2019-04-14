import React from "react";

import {ProfileHeading} from "./ProfileHeading"
import {ProfileBody} from "./ProfileBody";
import PaperSheet from "../PaperSheet/PaperSheet";

export const Profile = () => (
    <PaperSheet>
        <ProfileHeading/>
        <ProfileBody/>
    </PaperSheet>
);

