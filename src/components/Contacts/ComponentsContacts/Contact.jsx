import React from 'react'
import Style from '../style.js'
import DeleteIcon from '@material-ui/icons/Delete'
import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip'
import Avatar from '@material-ui/core/Avatar'

const getInitials = name => name.split(' ').map((n) => n[0]).join('')

export const Contact = ({ name, imgUrl, status = "Last seen recently", showDelete = false }) => (
    <li style={Style.liClass}>
        <div style={Style.dialogClass}>
            <div style={Style.wrapContactList}>
                <Avatar src={imgUrl}>{getInitials(name)}</Avatar>
                <div style={Style.dialogNameGroupClass}>{name}</div>
            </div>
            <div style={Style.infoLastMessageClass}>{status}</div>
            <div style={showDelete ? null : Style.hidden}>
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
