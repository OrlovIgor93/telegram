import React from "react";
import Typography from "@material-ui/core/Typography";
import {style} from "../styles";
import CloseIcon from '@material-ui/icons/Close'
import {IconButton} from "@material-ui/core";

export const Title = ({onClose}) => (

<div style={style.titles}>
    <div>
        <Typography variant="subtitle1">About</Typography>
    </div>
    <div style={style.linksRight}>
        <IconButton onClick={onClose}>
            <CloseIcon style={{color:'white'}}/>
        </IconButton>
    </div>
</div>
);