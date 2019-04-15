import React from 'react';
import Paper from "@material-ui/core/Paper";
import Style from '../style.js';
// import 
import { Link } from "react-router-dom";
import { Typography } from '@material-ui/core';


export const AddNewContact = () => (
    <Paper style={Style.paperNewContact} style={{ padding: '30px', width: '300px', height: '300px' }} elevation={1}>
        <div style={Style.headerNewContact}>
                <Typography variant="title" style={{ fontSize: '18px' }}>Add new contact</Typography>
            </div>
        <div>
            <input style={Style.inputNewContact} type="text" placeHolder="Phone number"></input>
            <input style={Style.inputNewContact} type="text" placeHolder="First name"></input>
            <input style={Style.inputNewContact} type="text" placeHolder="Last name"></input>
        </div>
            <div style={Style.footAddContactClass}>
            <Link to="/contacts"><div style={Style.newContactClass}>Cancel</div></Link>
                <Link to="/contacts"><div style={Style.newContactClass}>Save</div></Link>
            </div>
    </Paper>
);

export default AddNewContact
