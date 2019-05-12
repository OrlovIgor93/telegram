import {AvatarApp} from "../common/Avatar/Avatar";
import React from "react";
import {style} from "../styles";
import Typography from "@material-ui/core/Typography";

export const Description = ({user}) => (
    <div style={{display: "flex"}}>
        <div style={style.logoTelegram}>
            <AvatarApp
                big
                style={{marginRight: 15}}
                name={user.displayName}
                src={user.photoURL}
            />
        </div>
        <div style={{paddingTop: 30 + "px"}}>
            <div>
                <Typography variant="subtitle1">{user.displayName}</Typography>
            </div>
            <div style={{paddingTop: 15 + "px"}}>
                <Typography variant="body1">online</Typography>
            </div>
        </div>
    </div>
);