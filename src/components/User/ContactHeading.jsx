import React from "react";
import CloseIcon from '@material-ui/icons/Close'
import {Description} from "./Description"
import {style} from "../LeraStyles/style";
import {Typography} from "../MainPage/Typography";
import {IconButton} from "@material-ui/core";

export const ContactHeading = ({ imgurl, name, onClose }) => (
    <div style={{
            backgroundColor: "rgb(85, 128, 163)",
            color: "#fff",
            paddingLeft: "28px"
        }}
    >
        <div style={style.titles}>
            <div>
                <Typography variant="title">User Info</Typography>
            </div>
            <div style={style.linksRight}>
                <IconButton onClick={onClose}>
                    <CloseIcon style={{color:'white'}}/>
                </IconButton>
            </div>
        </div>
        <Description imgurl={imgurl} name={name} />
    </div>
);