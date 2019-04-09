import React from "react";
import {style} from "../LeraStyles/style";
import {Profile} from "./Profile"
import {Footer} from "./Footer"

export const AboutBody = () => (
    <div style={style.bodyBackground}>
        <Profile/>
        <Footer/>
    </div>
);