import React from "react";
import {style} from "../styles";
import PersonIcon from '@material-ui/icons/Person';
import PhoneIcon from '@material-ui/icons/Phone';
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import DraftsIcon from '@material-ui/icons/Drafts';
import DeleteIcon from '@material-ui/icons/DeleteOutlined';
import {Divider} from "@material-ui/core";


export const ContactBody = ({name, phone, onClose}) => {
    return (
        <div style={style.bodyBackground}>
            <List style={{paddingLeft: '60px'}}>
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
            </List>
                <Divider/>
                <List>
                    <ListItem button  style={{paddingLeft: '80px'}}>
                        <ListItemIcon>
                            <DraftsIcon/>
                        </ListItemIcon>
                        <ListItemText onClick={onClose} primary="Write a message"/>
                    </ListItem>
                <ListItem button  style={{paddingLeft: '80px'}}>
                    <ListItemIcon>
                        <DeleteIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Delete contact"/>
                </ListItem>
            </List>
        </div>
    )
};