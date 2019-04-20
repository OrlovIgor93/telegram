import { AvatarApp } from "../Avatar/Avatar";
import React from "react";
import {style} from "../LeraStyles/style";
import {Typography} from "../MainPage/Typography";

export const Description = ({ imgurl, name }) => (
    <div style={{ display: "flex" }}>
        <div style={style.logoTelegram}>
            <AvatarApp
                big
                src={imgurl}
                style={{ marginRight: 15 }}
                name={name}
            />
        </div>
        <div style={{ paddingTop: 30 + "px" }}>
            <div>
                <Typography variant="title">{name}</Typography>
            </div>
            <div style={{ paddingTop: 15 + "px" }}>
                <Typography variant="body">online</Typography>
            </div>
        </div>
    </div>
);