import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import DeleteIcon from '@material-ui/icons/DeleteOutlined';
import DraftsIcon from '@material-ui/icons/Drafts';

export const UserOptions = () => {
    return (
        <div>
            <Divider/>
            <List component="nav">
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
                    <ListItemText primary="Delete conversation"/>
                </ListItem>
            </List>
        </div>
    )
};

