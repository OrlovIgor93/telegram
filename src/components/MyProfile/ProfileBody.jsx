import React from "react";
import {style} from "../LeraStyles/style";
import PersonIcon from '@material-ui/icons/Person';
import PhoneIcon from '@material-ui/icons/Phone';
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import {Divider} from "@material-ui/core";

export const ProfileBody = ({phone, name, username}) => {
    return (
        <div style={style.bodyBackground}>
            <List>
                <ListItem>
                    <ListItemIcon>
                        <PhoneIcon/>
                    </ListItemIcon>
                    <ListItemText primary={phone}
                                  secondary="contact phone number"/>
                </ListItem>
                <Divider/>
                <ListItem>
                    <ListItemIcon>
                        <PersonIcon/>
                    </ListItemIcon>
                    <ListItemText primary={username}
                                  secondary="contact name"/>
                </ListItem>
                <Divider/>
                <ListItem>
                    <ListItemIcon>
                        <PersonIcon/>
                    </ListItemIcon>
                    <ListItemText primary={"@"+ name.toLowerCase()}
                                  secondary="contact username"/>
                </ListItem>
            </List>
        </div>
    )
};