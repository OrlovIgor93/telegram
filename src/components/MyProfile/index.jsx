import React, {Component} from "react";

import {ProfileHeading} from "./ProfileHeading";
import {ProfileBody} from "./ProfileBody";
import Paper from '@material-ui/core/Paper';

export class Profile extends Component {
    state = {
        user: JSON.parse(localStorage.getItem('profileInfo'))
    };

    render() {
        return (
            <Paper style={{padding: 0, width: '480px'}}
                   elevation={1}>
                <ProfileHeading user={this.state.user}/>
                <ProfileBody phone={this.state.user.phone}
                             username={this.state.user.fullName}
                             name={this.state.user.firstName}
                />
            </Paper>

)}
}

