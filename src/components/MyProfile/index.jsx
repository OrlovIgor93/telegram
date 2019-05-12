import React, { Component } from "react";

import { ProfileHeading } from "./ProfileHeading";
import { ProfileBody } from "./ProfileBody";
import Paper from "@material-ui/core/Paper";

export class Profile extends Component {

    render() {
        const { changeProfileInfo, onClose, user } = this.props;
        return (
            <Paper style={{ padding: 0, width: "480px" }}
                   elevation={1}>
                <ProfileHeading user={user} onClose={onClose}/>
                <ProfileBody user={user}
                             changeProfileInfo={changeProfileInfo}
                />
            </Paper>

        )
    }
}

