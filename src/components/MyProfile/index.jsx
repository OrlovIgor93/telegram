import React, {Component} from "react";

import {ProfileHeading} from "./ProfileHeading";
import {ProfileBody} from "./ProfileBody";
import Paper from '@material-ui/core/Paper';

export class Profile extends Component {

    render() {
        const {changeProfileInfo, onClose, profileInfo} =this.props;
        return (
            <Paper style={{padding: 0, width: '480px'}}
                   elevation={1}>
                <ProfileHeading user={profileInfo} onClose={onClose}/>
                <ProfileBody user={profileInfo}
                             changeProfileInfo={changeProfileInfo}
                />
            </Paper>

)}
}

