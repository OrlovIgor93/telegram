import React from "react";
import "./style.css";
import {Title} from "./Title";
import {Description} from "./Description";
import {Settingsstyle} from "../Settings/Titles";

export const AboutHeading = () => (
    <div style={Settingsstyle.Head}>
        <Title/>
        <Description/>
    </div>
);
