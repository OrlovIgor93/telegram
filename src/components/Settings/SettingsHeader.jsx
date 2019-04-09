import React from 'react';
import {Titles} from "./Titles"
import {Description} from "./Description"
import {LeraStyle} from "../LeraStyles/LeraStyles";

export const SettingsHeader = () => (

<div style={LeraStyle.Head}>
    <Titles/>
    <Description/>
</div>
);