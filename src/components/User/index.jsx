import React from "react";

import {ContactHeading} from "./ContactHeading";
import {ContactBody} from "./ContactBody";
import Paper from '@material-ui/core/Paper';

export const User = ({activeDialogInfo, onClose}) => (
    <Paper style={{padding: 0, width: "480px"}} elevation={1}>
        <ContactHeading
            onClose={onClose}
            imgurl={activeDialogInfo.imgUrl}
            name={activeDialogInfo.name}
        />
        <ContactBody name={activeDialogInfo.name}
                     phone={activeDialogInfo.phone}
                     onClose={onClose}
        />
    </Paper>
);

