import {AvatarApp} from "../Avatar/Avatar";
import React from "react";
import {style} from "../LeraStyles/style";
import {Typography} from "../MainPage/Typography";

export const Description = ({user}) => (
    <div style={{display: "flex"}}>
        <div style={style.logoTelegram}>
            <AvatarApp
                big
                style={{marginRight: 15}}
                name={user.fullName}
                src={user.img}
            />
        </div>
        <div style={{paddingTop: 30 + "px"}}>
            <div>
                <Typography variant="title">{user.fullName}</Typography>
            </div>
            <div style={{paddingTop: 15 + "px"}}>
                <Typography variant="body">online</Typography>
            </div>
        </div>
    </div>
);