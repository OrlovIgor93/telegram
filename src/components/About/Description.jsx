import React from "react";
import Typography from "@material-ui/core/Typography";
import {style} from "../styles";

export const Description = () => (
<div style={{display: 'flex'}}>
    <div style={style.logoTelegram}>
        <img src={require('./Telegram72.png')} alt="logo" />
    </div>
    <div style={{paddingTop: '40px'}}>
        <div>
            <Typography variant="subtitle1">
                Epam Telegram</Typography>
        </div>
        <div style={{paddingTop: '15px'}}>
            <Typography variant='body2'>Version 0.1</Typography></div>
    </div>
</div>
);
