import React from "react";

import {ProfileHeading} from "./ProfileHeading";
import {ProfileBody} from "./ProfileBody";
import Paper from '@material-ui/core/Paper';

export const Profile = () => (
    <Paper style={{ padding:0, width:'480px'}} elevation={1}>
        <ProfileHeading/>
        <ProfileBody/>
    </Paper>
);
