import React from "react";

import {Link} from "react-router-dom";
import {Typography} from "../MainPage/Typography";
import {style} from "../LeraStyles/style";
import CloseIcon from '@material-ui/icons/Close'
import {IconButton} from "@material-ui/core";

export const Title = ({onClose}) => (

<div style={style.titles}>
    <div>
        <Typography variant="title">About</Typography>
    </div>
    <div style={style.linksRight}>
        <IconButton onClick={onClose}>
            <CloseIcon   style={{color:'white'}}/>
        </IconButton>
    </div>
</div>
);