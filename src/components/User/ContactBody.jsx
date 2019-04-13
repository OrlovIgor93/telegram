import React from "react";
import "./style.css";
import {style} from "../LeraStyles/style";
import {UserOptions} from "../Settings/UserOptions";
import PersonIcon from '@material-ui/icons/Person';
import PhoneIcon from '@material-ui/icons/Phone';
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";

export const ContactBody = () => {
    return (
        <div style={style.bodyBackground} >
            <List component="nav">
                <ListItem button>
                    <ListItemIcon>
                        <PhoneIcon/>
                    </ListItemIcon>
                    <ListItemText primary="+37529 1234567"/>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <PersonIcon/>
                    </ListItemIcon>
                    <ListItemText primary="@username"/>
                </ListItem>
            </List>
            <UserOptions/>
        </div>
    )
};