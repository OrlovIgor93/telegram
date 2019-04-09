import {Link} from "react-router-dom"
import React from "react";
import {Typography} from "../MainPage/Typography";
import {LeraStyle} from "../LeraStyles/styles";

export const Titles = () => (
    <div style={LeraStyle.Titles}>
        <div>
            <Typography variant="title">Settings</Typography>
        </div>
        <div style={LeraStyle.LinksRight}>
            <Link to="/settings">
                <Typography variant='title2'>Edit</Typography>
            </Link>
        </div>
        <div>
            <Link to="/">
                <Typography variant='title2'>Close</Typography>
            </Link>
        </div>
    </div>
);
