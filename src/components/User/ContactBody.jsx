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

export const ContactBody = ({name, phone='+375297654321'}) => {
    return (
        <div style={style.bodyBackground} >
            <List>
                <ListItem>
                    <ListItemIcon>
                        <PhoneIcon/>
                    </ListItemIcon>
                    <ListItemText primary={phone}
                    secondary="user's phone number"/>
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <PersonIcon/>
                    </ListItemIcon>
                    <ListItemText primary={name}
                                  secondary="user's name"/>
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