import React from "react";
import {SettingsHeader} from "./SettingsHeader"
import {SettingsBody} from "./SettingsBody"
import Paper from '@material-ui/core/Paper';

export const Settings = props => (
         <Paper style={{ padding: 0, width: "480px" }} elevation={1}>
           <SettingsHeader
             imgurl={props.history.location.state.imgurl}
             name={props.history.location.state.name}
           />
           <SettingsBody />
         </Paper>
       );

