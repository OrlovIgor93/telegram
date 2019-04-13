import React from 'react';
import Switches from "../Settings/Switches";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";

export const NotifySettings = () => (

    <List>
        <ListItem button>
            <ListItemText primary="Dark theme"/>
            <Switches/>
        </ListItem>
    </List>
);

