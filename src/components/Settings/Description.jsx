import {Avatar} from "../Avatar";
import React from "react";
import {style} from "../LeraStyles/style";
import {Typography} from "../MainPage/Typography";


export const Description = () => (
    <div style={{display: 'flex'}}>
        <div style={style.logoTelegram}>
            <Avatar
                medium
                style={{ marginRight: 15 }}
                name={"Valerie"}
            />
        </div>
        <div style={{paddingTop: 30 + 'px'}}>
            <div><Typography variant="title">Name</Typography></div>
            <div style={{paddingTop: 15 + 'px'}}>
                <Typography variant="body">online status</Typography></div>
        </div>
    </div>
);