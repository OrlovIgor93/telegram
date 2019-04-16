import React from "react";

import {ContactHeading} from "./ContactHeading";
import {ContactBody} from "./ContactBody";
import Paper from '@material-ui/core/Paper';

export const User = props => (
         <Paper style={{ padding: 0, width: "480px" }} elevation={1}>
           {(() => {
             console.log("----User", props);
           })()}
           <ContactHeading
             imgurl={props.history.location.state.imgurl}
             name={props.history.location.state.name}
           />
           <ContactBody />
         </Paper>
       );


