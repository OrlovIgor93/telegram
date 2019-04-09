import React from "react";

import {Link} from "react-router-dom";
import {Typography} from "../MainPage/Typography";
import {LeraStyle} from "../LeraStyles/LeraStyles";

export const Title = () => (

<div style={LeraStyle.Titles}>
    <div>
        <Typography variant="title">About</Typography>
    </div>
    <div style={LeraStyle.LinksRight}>
        <Link to="/">Close</Link>
    </div>
</div>
);