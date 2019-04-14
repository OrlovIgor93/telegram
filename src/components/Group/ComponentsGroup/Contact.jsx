import React from 'react';
import { Avatar } from "../../Avatar";
import Style from '../style.js'
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

export const Contact = props => (
    <li style={Style.liClass}>
        <div style={Style.dialogClass}>
            <div style={Style.wrapContactList}>
                <div><Avatar name={props.avatar} /></div>
                <div style={Style.dialogNameGroupClass}>{props.name}</div>
            </div>
            <div style={Style.infoLastMessageClass}>{props.status}</div>
            <div style={props.showDelete ? null : Style.hidden}>
                <Tooltip title="Delete">
                    <IconButton aria-label="Delete">
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
            </div>
        </div>
    </li>
)

export default Contact
