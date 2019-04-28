import React, { useContext } from "react";
import { Link } from "react-router-dom"
import PropTypes from "prop-types";

import { MainPageContext } from "../MainPageContext";
import LeftMenu from "../LeftMenu/LeftMenu";
import { HorizontalWrap } from "../HorizontalWrap";

import AppBar from "@material-ui/core/AppBar/index";
import Typography from "@material-ui/core/Typography/index";
import Button from "@material-ui/core/Button/index";
import SearchIcon from '@material-ui/icons/Search';
import InputBase from "@material-ui/core/InputBase/index";
import Telegram from "../../../img/Telegram.svg";
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from "@material-ui/core/styles/index";
import {
    headerStyle,
    mainMenuStyle,
    rightWrapperButtons,
} from "../styles"

const styles = (theme) => ({

    logoImage: {
        height: 24
    },
    infoActiveDialog: {
        width: "100%",
        display: "flex",
        justifyContent: "flex-start",
        color: "#fff",
        textTransform: "inherit",
    },

    search: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        alignSelf: "center",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        height: '60%',
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing.unit,
            marginRight: theme.spacing.unit,
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing.unit * 9,
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
        width: '100%',
    },
    inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 10,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 140,
            '&:focus': {
                width: 200,
            },
        },
    },

});

const Header = ({ classes }) => {
    const { profileInfo,
        activeDialogInfo: { name, imgUrl },
        searchValueInDialog,
        handleSearchForDialog,
        handlerBlurSearchDialog } = useContext(MainPageContext);
    return (
        <AppBar position="static">
            <HorizontalWrap style={headerStyle}>
                <HorizontalWrap style={mainMenuStyle}>
                    <LeftMenu profileInfo={profileInfo} />
                    <div style={{ display: "flex" }}>
                        <img className={classes.logoImage} src={`${Telegram}`} alt="" />
                    </div>
                </HorizontalWrap>
                <HorizontalWrap style={rightWrapperButtons}>
                    <Button
                        disabled={!name}
                        fullWidth
                        className={classes.infoActiveDialog}
                        component={Link}
                        to={{
                            pathname: "/contact",
                            state: { imgurl: imgUrl, name: name }
                        }}
                    >
                        <Typography varint="h5" noWrap color="inherit">
                            {name}
                        </Typography>
                        {/* <Typography noWrap style={{ color: "#b9cfe3" }}>
                         online
                             </Typography> */}
                    </Button>

                    {name &&
                        <React.Fragment>
                            <div className={classes.search}>
                                <div className={classes.searchIcon}>
                                    <SearchIcon />
                                </div>
                                <InputBase
                                    placeholder="Search in dialog…"
                                    value={searchValueInDialog}
                                    onChange={handleSearchForDialog}
                                    onBlur={handlerBlurSearchDialog}
                                    classes={{
                                        root: classes.inputRoot,
                                        input: classes.inputInput,
                                    }}
                                />
                            </div>
                            <Button disabled={!name} color="inherit">
                                {/* <MoreIcon/> */}
                            </Button>
                        </React.Fragment>
                    }
                </HorizontalWrap>
            </HorizontalWrap>
        </AppBar>
    );
};

Header.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);
