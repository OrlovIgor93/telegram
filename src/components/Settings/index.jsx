import React from "react";
import {SettingsHeader} from "./SettingsHeader"
import {SettingsBody} from "./SettingsBody"
import Paper from '@material-ui/core/Paper';

export const Settings = () => (
    <Paper style={{ padding:0, width:'480px'}} elevation={1}>
        <SettingsHeader/>
        <SettingsBody/>
    </Paper>
);

