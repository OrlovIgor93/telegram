import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import IconButton from "@material-ui/core/IconButton";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { withStyles } from "@material-ui/core/styles";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import GroupIcon from "@material-ui/icons/GroupAdd";
import PeopleIcon from "@material-ui/icons/People";
import SettingsIcon from "@material-ui/icons/Settings";
import CodeIcon from "@material-ui/icons/Code";
import SvgIcon from "@material-ui/core/SvgIcon";

const styles = theme => ({
  root: {
    display: "flex"
  },
  menuButton: {
    margin: "0 5px"
  },
  paper: {
    marginRight: theme.spacing.unit * 2
  }
});

function TlegramIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M9.78,18.65L10.06,14.42L17.74,7.5C18.08,7.19 17.67,7.04 17.22,7.31L7.74,13.3L3.64,12C2.76,11.75 2.75,11.14 3.84,10.7L19.81,4.54C20.54,4.21 21.24,4.72 20.96,5.84L18.24,18.65C18.05,19.56 17.5,19.78 16.74,19.36L12.6,16.3L10.61,18.23C10.38,18.46 10.19,18.65 9.78,18.65Z" />
    </SvgIcon>
  );
}

class MenuListComposition extends React.Component {
  state = {
    open: false
  };

  handleToggle = () => {
    this.setState(state => ({ open: !state.open }));
  };

  handleClose = event => {
    if (this.anchorEl.contains(event.target)) {
      return;
    }

    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
        <div>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
            buttonRef={node => {
              this.anchorEl = node;
            }}
            aria-owns={open ? "menu-list-grow" : undefined}
            aria-haspopup="true"
            onClick={this.handleToggle}
          >
            <MenuIcon />
          </IconButton>

          <Popper
            open={open}
            anchorEl={this.anchorEl}
            transition
            disablePortal
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                id="menu-list-grow"
                style={{
                  transformOrigin:
                    placement === "bottom" ? "center top" : "center bottom"
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={this.handleClose}>
                    <MenuList>
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
                          <TlegramIcon />
                        </ListItemIcon>
                        <Link to="/about">
                          <ListItemText
                            classes={{ primary: classes.primary }}
                            inset
                            primary="About"
                          />
                        </Link>
                      </MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
      </div>
    );
  }
}

MenuListComposition.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MenuListComposition);
