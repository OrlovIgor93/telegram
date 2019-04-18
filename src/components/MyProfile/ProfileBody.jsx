import React from "react";
import {style} from "../LeraStyles/style";

import PersonIcon from '@material-ui/icons/Person';
import PhoneIcon from '@material-ui/icons/Phone';
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import {Divider} from "@material-ui/core";

export const ProfileBody = ({phoneNumber = '+375291234567', userName, email}) => {
    return (
        <div style={style.bodyBackground}>
            <List component="nav">
                <ListItem button>
                    <ListItemIcon>
                        <PhoneIcon/>
                    </ListItemIcon>
                    <ListItemText primary={phoneNumber}/>
                </ListItem>
                <Divider/>
                <ListItem button>
                    <ListItemIcon>
                        <PersonIcon/>
                    </ListItemIcon>
                    <ListItemText primary={email}/>
                </ListItem>
                <Divider/>
                <ListItem button>
                    <ListItemIcon>
                        <PersonIcon/>
                    </ListItemIcon>
                    <ListItemText primary={userName}/>
                </ListItem>
            </List>
        </div>
    )
};