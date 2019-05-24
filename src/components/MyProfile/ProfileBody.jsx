import React from "react";
import { style } from "../styles";
import PersonIcon from "@material-ui/icons/Person";
import PhoneIcon from "@material-ui/icons/Phone";
import ArrowBack from "@material-ui/icons/ArrowBack";
import ChangeHistory from "@material-ui/icons/ChangeHistory";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import { Divider } from "@material-ui/core";

export const ProfileBody = ({ user, setOpenModal, handleLogOut}) => (
    <div style={style.bodyBackground}>

        <List style={{ padding: "0 60px" }}>
            <ListItem>
                <ListItemIcon>
                    <PhoneIcon/>
                </ListItemIcon>
                <ListItemText primary={user.phoneNumber}
                              secondary="your phone number"/>
            </ListItem>
            <Divider/>
            <ListItem>
                <ListItemIcon>
                    <PersonIcon/>
                </ListItemIcon>
                <ListItemText primary={user.displayName}
                              secondary="your name"/>
            </ListItem>
            <Divider/>
            <ListItem>
                <ListItemIcon>
                    <PersonIcon/>
                </ListItemIcon>
                <ListItemText primary={"@" + user.displayName.toLowerCase()}
                              secondary="your username"/>
            </ListItem>
            <ListItem onClick={()=>setOpenModal(true)} style={{ justifyContent: "center" }}>
                <ListItemIcon>
                    <ChangeHistory />
                </ListItemIcon>
                <ListItemText primary="Change my Name"/>
            </ListItem>

            <ListItem onClick={handleLogOut}>
                <ListItemIcon>
                    <ArrowBack/>
                </ListItemIcon>
                <ListItemText primary="Log Out"/>
            </ListItem>
        </List>
    </div>
);
