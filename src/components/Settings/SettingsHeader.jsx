import React from 'react';
import {Titles} from "./Titles"
import {Description} from "./Description"
import {Settingsstyle} from "../Settings/Titles";

export const SettingsHeader = () => (

<div style={Settingsstyle.Head}>
    <Titles/>
    <Description/>
</div>
);