import React from "react";

import {ContactHeading} from "./ContactHeading";
import {ContactBody} from "./ContactBody";
import Paper from '@material-ui/core/Paper';

export const User = () => (

    <Paper style={{padding: 0, width: '480px'}} elevation={1}>
        <ContactHeading/>
        <ContactBody/>
    </Paper>
);


