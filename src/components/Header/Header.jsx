import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import LeftMenu from "../MainPage/LeftMenu/LeftMenu";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Telegram from "../../../src/img/Telegram.svg";
import { Title,  BodyText } from "../MainPage/Typography";
import { Button } from "../MainPage/Button";

import IconsetW from "../../img/icons/IconsetW.png";

import { HorizontalWrap } from "../MainPage/HorizontalWrap";

const styles = () => ({
  header: {
    minHeight: 48,
    maxHeight: 48,
    padding: 0,
    width: "100%",
    alignItems: "center"
  },
  mainMenu: {
    flex: "2 1 31%"
  },
  logoImage: {
    height: 24
  }
});

function Header(props) {
  const { classes } = props;
  return (
    <AppBar position="static">
      <HorizontalWrap style={headerStyle}>
        <HorizontalWrap style={mainMenuStyle}>
          <LeftMenu />
          <div style={{ display: "flex" }}>
            <img className={classes.logoImage} src={`${Telegram}`} alt="" />
          </div>
        </HorizontalWrap>
        <HorizontalWrap style={rightWrapperButons}>
          <Button to="/contact" style={dialogButtonName}>
            <Title style={{ color: "#fff", padding: "0px 10px" }}>
              Liza Smitt
            </Title>
            <BodyText style={{ color: "#b9cfe3" }}>online</BodyText>
          </Button>
          <Button style={rightMenuButtonStyle}>
            {" "}
            <i style={iconSearchButton} />{" "}
          </Button>
          <Button style={rightMenuButtonStyle}>
            {" "}
            <i style={iconLeftMenu} />{" "}
          </Button>
        </HorizontalWrap>
      </HorizontalWrap>
    </AppBar>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);

export const rightMenuButtonStyle = {
  display: "block",

  padding: "15px 19px",
  lineHeight: "16px"
};

export const iconSearchButton = {
  display: "inline-block",
  width: 17,
  height: 17,
  backgroundImage: `url(${IconsetW})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "-12px -1037px",
  verticalAlign: "middle",
  lineHeight: "16px"
};

export const iconLeftMenu = {
  display: "inline-block",
  width: 11,
  height: 16,
  backgroundImage: `url(${IconsetW})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "-16px -1011px",
  verticalAlign: "middle",
  lineHeight: "16px"
};

export const dialogButtonName = {
  width: "100%"
};

export const headerStyle = {
  lineHeight: "48px",
  backgroundColor: "#5682a3",
  alignItems: "center"
};

export const mainMenuStyle = {
  flex: "2 1 31%",
  alignItems: "center"
};

export const rightWrapperButons = {
  flex: "1 2 69%"
};
