import React from "react";
import { HorizontalWrap } from "../HorizontalWrap";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { header } from "../../styles";
import IconButton  from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/core/SvgIcon";
import MenuIcon from "@material-ui/core/SvgIcon/SvgIcon";


export const Header = ({ title, onClose, children }) => (
    <HorizontalWrap style={header}>
        <Typography variant='subtitle1' color="inherit">{title} </Typography>
        <HorizontalWrap>

            {children}

            <Button onClick={onClose} color="inherit">
                Close
            </Button>
        </HorizontalWrap>
    </HorizontalWrap>
);
