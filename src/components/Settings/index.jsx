import React from "react";
import "./style.css";
import {SettingsHeader} from "./SettingsHeader"
import {SettingsBody} from "./SettingsBody"

export const Settings = () => (
    <div className="wrapper">
        <SettingsHeader/>
        <SettingsBody/>
    </div>
);

