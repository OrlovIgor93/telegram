import React from 'react';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from '@material-ui/core/ListItemText';
import PersonIcon from '@material-ui/icons/Person';
import PhoneIcon from '@material-ui/icons/Phone';


export const ProfileInfo = () => (
    <div>
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
    </div>
);