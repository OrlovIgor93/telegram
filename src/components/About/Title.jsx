import React from "react";
import "./style.css";
import {Link} from "react-router-dom";
import {Typography} from "../MainPage/Typography";
import {Settingsstyle} from "../Settings/Titles";

export const Title = () => (

<div style={Settingsstyle.Titles}>
    <div>
        <Typography variant="title">About</Typography>
    </div>
    <div style={Settingsstyle.LinksRight}>
        <Link to="/">Close</Link>
    </div>
</div>
);