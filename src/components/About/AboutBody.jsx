import React from "react";
import {style} from "../LeraStyles/style";
import {Caption} from "./Caption"
import {Footer} from "./Footer"

export const AboutBody = () => (
    <div style={style.bodyBackground}>
        <Caption/>
        <Footer/>
    </div>
);