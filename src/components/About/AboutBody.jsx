import React from "react";

import {Profile} from "./Profile"
import {Footer} from "./Footer"

export const AboutBody = () => (
    <div style={style.BodyBackground}>
        <Profile/>
        <Footer/>
    </div>
);
const style = {
    BodyBackground: {
        background:"white"
    }
};