import React, {useContext} from "react";
import {Link} from "react-router-dom"
import PropTypes from "prop-types";

import {MainPageContext} from "../MainPage/MainPageContext";
import LeftMenu from "../MainPage/LeftMenu/LeftMenu";
import {HorizontalWrap} from "../MainPage/HorizontalWrap";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import {withStyles} from "@material-ui/core/styles";
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import Telegram from "../../../src/img/Telegram.svg";

const styles = () => ({

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

});

const Header = ({classes}) => {
    const {profileInfo, activeDialogInfo: {name, imgUrl}, onSelectSearchForDialog} = useContext(MainPageContext);
    return (
        <AppBar position="static">
            <HorizontalWrap style={headerStyle}>
                <HorizontalWrap style={mainMenuStyle}>
                    <LeftMenu profileInfo={profileInfo}/>
                    <div style={{display: "flex"}}>
                        <img className={classes.logoImage} src={`${Telegram}`} alt=""/>
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
                            state: {imgurl: imgUrl, name: name}
                        }}
                    >
                        <Typography varint="h5" noWrap color="inherit">
                            {name}
                        </Typography>
                        {/* <Typography noWrap style={{ color: "#b9cfe3" }}>
                         online
                             </Typography> */}
                    </Button>
                    <Button
                        disabled={!name}
                        color="inherit"

                        onClick={onSelectSearchForDialog}
                    >
                        <SearchIcon/>
                    </Button>
                    <Button disabled={!name} color="inherit">
                        <MoreIcon/>
                    </Button>
                </HorizontalWrap>
            </HorizontalWrap>
        </AppBar>
    );
};

Header.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);

export const headerStyle = {
    lineHeight: "48px",
    backgroundColor: "#5682a3",
    alignItems: "center",
};

export const mainMenuStyle = {
    flex: "2 1 31%",
    alignItems: "center",
};

export const rightWrapperButtons = {
    flex: "1 2 69%",
    height: "100%"
};
