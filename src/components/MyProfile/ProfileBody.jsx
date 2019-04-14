import React from "react";
import {style} from "../LeraStyles/style";

import PersonIcon from '@material-ui/icons/Person';
import PhoneIcon from '@material-ui/icons/Phone';
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import DraftsIcon from '@material-ui/icons/Drafts';
import {Divider} from "@material-ui/core";

export const ProfileBody = () => {
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
                <Divider/>
                <ListItem button>
                    <ListItemIcon>
                        <DraftsIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Change my info"/>
                </ListItem>
            </List>
        </div>
    )
};