import {Link} from "react-router-dom"
import React from "react";
import {Typography} from "../MainPage/Typography";

export const Titles = () => (
    <div style={Settingsstyle.Titles}>
        <div>
            <Typography variant="title">Settings</Typography>
        </div>
        <div style={Settingsstyle.LinksRight}>
            <Link to="/settings">
                <Typography variant='title2'>Edit</Typography>
            </Link>
        </div>
        <div>
            <Link to="/">
                <Typography variant='title2'>Close</Typography>
            </Link>
        </div>
    </div>
);
export const Settingsstyle={
    Titles: {
        display: 'flex',
        justifyContent: 'spaceBetween',
        color: '#fff',
        padding: 20+'px', 0: 5+'px'
        },
    LinksRight: {
        marginLeft: 'auto',
        marginRight: 20 +'px'},
    Head: {
        backgroundColor: 'rgb(85, 128, 163)',
        color: "#fff",
        paddingLeft: 28+'px',
    },
    Wrapper: {
        width: 480+'px',
        display: 'flex',
        flexDirection: 'column',
        margin: 'auto'
    }
};