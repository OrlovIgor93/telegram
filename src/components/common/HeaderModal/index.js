
import React from "react";
import { VerticalWrap } from "../VerticalWrap";
import { style } from "../../styles";
import Typography from "@material-ui/core/Typography";

const HeaderModal =()=>(
    <VerticalWrap>
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
    </VerticalWrap>
);

export const headerModal ={
    background: ""
}