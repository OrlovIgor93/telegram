import React from "react";
import {Link} from "react-router-dom";
import CloseIcon from '@material-ui/icons/Close'
import {Description} from "./Description"
import {style} from "../LeraStyles/style";

export const ProfileHeading = ({user}) => (
    <div style={{
        backgroundColor: 'rgb(85, 128, 163)',
        color: '#fff',
        paddingLeft: 28 + 'px'
    }}>
        <div style={style.titles}>
            <div>My Profile</div>
            <div style={style.linksRight}>
                <Link to="/">
                    <CloseIcon style={{color: 'white'}}/>
                </Link></div>
        </div>
        <Description user={user}/>
    </div>
);