import React from "react";
import "./style.css";
import {SettingsHeader} from "./SettingsHeader"
import {SettingsBody} from "./SettingsBody"
import {Wrapper} from "../About";

export const Settings = () => (
    <Wrapper>
        <SettingsHeader/>
        <SettingsBody/>
    </Wrapper>
);

