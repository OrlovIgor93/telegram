import {Avatar} from "../Avatar";
import React from "react";
import {LeraStyle} from "../LeraStyles/styles";
import {Typography} from "../MainPage/Typography";


export const Description = () => (
    <div style={{display: 'flex'}}>
        <div style={LeraStyle.LogoTelegram}>
            <Avatar style={{height: 48, width: 48}}>dp</Avatar>
        </div>
        <div style={{paddingTop: 30 + 'px'}}>
            <div><Typography variant="title">Name</Typography></div>
            <div style={{paddingTop: 15 + 'px'}}>
                <Typography variant="body">online status</Typography></div>
        </div>
    </div>
);