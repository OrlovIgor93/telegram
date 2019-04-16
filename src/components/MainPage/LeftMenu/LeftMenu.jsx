import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { withStyles } from "@material-ui/core/styles";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import GroupIcon from "@material-ui/icons/GroupAdd";
import PeopleIcon from "@material-ui/icons/People";
import SettingsIcon from "@material-ui/icons/Settings";
import CodeIcon from "@material-ui/icons/Code";
import { TelegramIcon } from "../../Icons";

const styles = () => ({
  root: {
    display: "flex"
  },
  menuButton: {
    margin: "0 5px"
  }
});

const LeftMenu = ({ classes }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  return (
    <div className={classes.root}>
      <div>
        <IconButton
          className={classes.menuButton}
          color="inherit"
          aria-owns={anchorEl ? "simple-menu" : undefined}
          aria-haspopup="true"
          onClick={event => {
            setAnchorEl(event.currentTarget);
          }}
        >
          <MenuIcon />
        </IconButton>

        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          getContentAnchorEl={null}
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          open={Boolean(anchorEl)}
          onClose={() => setAnchorEl(null)}
        >
          <MenuItem className={classes.menuItem}>
            <ListItemIcon className={classes.icon}>
              <GroupIcon />
            </ListItemIcon>
            <Link to="/group">
              <ListItemText
                classes={{ primary: classes.primary }}
                inset
                primary="New Group"
              />
            </Link>
          </MenuItem>

          <MenuItem className={classes.menuItem}>
            <ListItemIcon className={classes.icon}>
              <PeopleIcon />
            </ListItemIcon>
            <Link to="/contacts">
              <ListItemText
                classes={{ primary: classes.primary }}
                inset
                primary="Contacts"
              />
            </Link>
          </MenuItem>

          <MenuItem className={classes.menuItem}>
            <ListItemIcon className={classes.icon}>
              <SettingsIcon />
            </ListItemIcon>
            <Link to="/contact">
              <ListItemText
                classes={{ primary: classes.primary }}
                inset
                primary="Settings"
              />
            </Link>
          </MenuItem>

          <MenuItem className={classes.menuItem}>
            <ListItemIcon className={classes.icon}>
              <CodeIcon />
            </ListItemIcon>
            <a
              href="https://github.com/OrlovIgor93/telegram/tree/develop/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ListItemText
                classes={{ primary: classes.primary }}
                inset
                primary="Code"
              />
            </a>
          </MenuItem>

          <MenuItem className={classes.menuItem}>
            <ListItemIcon className={classes.icon}>
              <TelegramIcon />
            </ListItemIcon>
            <Link to="/about">
              <ListItemText
                classes={{ primary: classes.primary }}
                inset
                primary="About"
              />
            </Link>
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
