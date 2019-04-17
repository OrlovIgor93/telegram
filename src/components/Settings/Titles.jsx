import {Link} from "react-router-dom"
import React from "react";
import {Typography} from "../MainPage/Typography";
import {style} from "../LeraStyles/style";
import CloseIcon from '@material-ui/icons/Close'

export const Titles = () => (
    <div style={style.titles}>
        <div>
            <Typography variant="title">Settings</Typography>
        </div>
        <div style={style.linksRight}>
            <Link to="/">
                <CloseIcon style={{color:'white'}}/>
            </Link>
        </div>
    </div>
);
