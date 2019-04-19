import React from "react";
import {style} from "../LeraStyles/style";

import PersonIcon from '@material-ui/icons/Person';
import PhoneIcon from '@material-ui/icons/Phone';
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import DraftsIcon from '@material-ui/icons/Drafts';
import DeleteIcon from '@material-ui/icons/DeleteOutlined';
import {Divider} from "@material-ui/core";

export const ContactBody = () => {
    return (
        <div style={style.bodyBackground} >
            <List component="nav">
                <ListItem button>
                    <ListItemIcon>
                        <PhoneIcon/>
                    </ListItemIcon>
                    <ListItemText primary="+375229880111"/>
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
                    <ListItemText primary="Write a message"/>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <DeleteIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Delete contact"/>
                </ListItem>
            </List>
        </div>
    )
};