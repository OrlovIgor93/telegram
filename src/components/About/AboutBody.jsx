import React from "react";
import {style} from "../styles";
import {Caption} from "./Caption"
import {Footer} from "./Footer"

export const AboutBody = () => (
    <div style={style.bodyBackground}>
        <Caption/>
        <Footer/>
    </div>
);