import React from "react";

import {Link} from "react-router-dom";
import {Typography} from "../MainPage/Typography";
import {style} from "../LeraStyles/style";
import CloseIcon from '@material-ui/icons/Close'

export const Title = () => (

<div style={style.titles}>
    <div>
        <Typography variant="title">About</Typography>
    </div>
    <div style={style.linksRight}>
        <Link to="/home">
            <CloseIcon style={{color:'white'}}/>
        </Link>
    </div>
</div>
);