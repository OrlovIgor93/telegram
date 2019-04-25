import React from "react";
import CloseIcon from '@material-ui/icons/Close'
import {Description} from "./Description"
import {style} from "../LeraStyles/style";
import {IconButton} from "@material-ui/core";

export const ProfileHeading = ({user, onClose}) => (
    <div style={{
        backgroundColor: 'rgb(85, 128, 163)',
        color: '#fff',
        paddingLeft: 28 + 'px'
    }}>
        <div style={style.titles}>
            <div>My Profile</div>
            <div style={style.linksRight}>
                <IconButton onClick={onClose}>
                    <CloseIcon   style={{color:'white'}}/>
                </IconButton>
            </div>
        </div>
        <Description user={user}/>
    </div>
);