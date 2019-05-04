import React, { useContext } from "react";
import PropTypes from "prop-types";

import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { withStyles } from "@material-ui/core/styles";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import PeopleIcon from "@material-ui/icons/People";
import SettingsIcon from "@material-ui/icons/Settings";
import CodeIcon from "@material-ui/icons/Code";
import { TelegramIcon } from "../../Icons";
import { StoreContext } from "../../../store";

const styles = () => ({
    root: {
        display: "flex"
    },
    menuButton: {
        margin: "0 5px"
    }
});

const LeftMenu = ({ classes }) => {
    const { handleClickOpenModal, anchorLeftMenu, setAnchorLeftMenu } = useContext(StoreContext);

    return (
        <div className={classes.root}>
            <div>
                <IconButton
                    className={classes.menuButton}
                    color="inherit"
                    aria-owns={anchorLeftMenu ? "simple-menu" : undefined}
                    aria-haspopup="true"
                    onClick={event => {
                        setAnchorLeftMenu(event.currentTarget);
                    }}
                >
                    <MenuIcon/>
                </IconButton>

                <Menu
                    id="simple-menu"
                    anchorEl={anchorLeftMenu}
                    getContentAnchorEl={null}
                    anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                    open={Boolean(anchorLeftMenu)}
                    onClose={() => setAnchorLeftMenu(null)}
                >

                    <MenuItem onClick={() => handleClickOpenModal("Contacts")}
                              className={classes.menuItem}
                    >
                        <ListItemIcon className={classes.icon}>
                            <PeopleIcon/>
                        </ListItemIcon>
                        <ListItemText
                            classes={{ primary: classes.primary }}
                            primary="Contacts"
                        />
                    </MenuItem>

                    <MenuItem onClick={() => handleClickOpenModal("My profile")}
                              className={classes.menuItem}
                    >
                        <ListItemIcon className={classes.icon}>
                            <SettingsIcon/>
                        </ListItemIcon>
                        <ListItemText
                            classes={{ primary: classes.primary }}
                            primary="My profile"
                        />
                    </MenuItem>

                    <MenuItem className={classes.menuItem}>
                        <ListItemIcon className={classes.icon}>
                            <CodeIcon/>
                        </ListItemIcon>
                        <a
                            style={{ paddingLeft: 16 }}
                            href="https://github.com/OrlovIgor93/telegram/tree/develop/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <ListItemText
                                classes={{ primary: classes.primary }}
                                primary="Code"
                            />
                        </a>
                    </MenuItem>

                    <MenuItem onClick={() => handleClickOpenModal("About")} className={classes.menuItem}>
                        <ListItemIcon className={classes.icon}>
                            <TelegramIcon/>
                        </ListItemIcon>
                        <ListItemText
                            classes={{ primary: classes.primary }}
                            primary="About"
                        />
                    </MenuItem>
                </Menu>
            </div>
        </div>
    );
};

LeftMenu.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LeftMenu);
