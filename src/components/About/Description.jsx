import React from "react";
import {Typography} from "../MainPage/Typography";
import {style} from "../LeraStyles/style";

export const Description = () => (
<div style={{display: 'flex'}}>
    <div style={style.logoTelegram}>
        <img src="https://web.telegram.org/img/Telegram72.png" alt="logo"/>
    </div>
    <div style={{paddingTop: 40+'px'}}>
        <div>
            <Typography variant="title">
                Epam Telegram</Typography>
        </div>
        <div style={{paddingTop: 15+'px'}}>
            <Typography variant='body'>Version 0.1</Typography></div>
    </div>
</div>
);