import React from "react";
import {LeraStyle} from "../LeraStyles/styles";
import {Profile} from "./Profile"
import {Footer} from "./Footer"

export const AboutBody = () => (
    <div style={LeraStyle.BodyBackground}>
        <Profile/>
        <Footer/>
    </div>
);