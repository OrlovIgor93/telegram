import { AvatarApp } from "../common/Avatar/Avatar";
import React from "react";
import {style} from "../styles";
import Typography from "@material-ui/core/Typography";

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
                <Typography variant="title1">{name}</Typography>
            </div>
            <div style={{ paddingTop: 15 + "px" }}>
                <Typography variant="body1">online</Typography>
            </div>
        </div>
    </div>
);