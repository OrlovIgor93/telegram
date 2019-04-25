import React from "react";
import {AboutHeading} from "./AboutHeading";
import {AboutBody} from "./AboutBody";
import Paper from "@material-ui/core/Paper";

export const About = ({onClose}) => (
    <Paper style={{padding: 0, width: '480px'}} elevation={1}>
        <AboutHeading onClose={onClose}/>
        <AboutBody/>
    </Paper>
);

