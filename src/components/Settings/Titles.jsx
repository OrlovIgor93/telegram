import {Link} from "react-router-dom"
import React from "react";
import {Typography} from "../MainPage/Typography";
import {style} from "../LeraStyles/style";

export const Titles = () => (
    <div style={style.titles}>
        <div>
            <Typography variant="title">Settings</Typography>
        </div>
        <div style={style.linksRight}>
            <Link to="/">
                <Typography variant='title2'>Close</Typography>
            </Link>
        </div>
    </div>
);
