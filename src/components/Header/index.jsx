import React from "react";
import { Link } from "react-router-dom";
import { Title, SubTitle, BodyText } from "../MainPage/Typography";
import { HorizontalWrap } from "../MainPage/HorizontalWrap";
import { Button } from "../MainPage/Button";

import IconsetW from "../../img/icons/IconsetW.png";
import "./style.css";

export const Header = () => (
  <HorizontalWrap style={headerStyle}>
    <div style={mainMenuStyle}>
      <Link className="navButton" to="/about">
        <SubTitle style={{ padding: 5 }}>About</SubTitle>
      </Link>

      <Link className="navButton" to="/contact">
        <SubTitle style={{ padding: 5 }}>User</SubTitle>
      </Link>

      <Link className="navButton" to="contact">
        <SubTitle style={{ padding: 5 }}>Contact</SubTitle>
      </Link>

      <Link className="navButton" to="group">
        <SubTitle style={{ padding: 5 }}>Group</SubTitle>
      </Link>

      <Link className="navButton" to="contacts">
        <SubTitle style={{ padding: 5 }}>Contacts</SubTitle>
      </Link>
    </div>
    <HorizontalWrap style={rightWrapperButons}>
      <Button to="/contact" style={dialogButtonName}>
        <Title style={{ color: "#fff", padding: "0px 10px" }}>Liza Smitt</Title>
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
);

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
  flex: "2 1 31%"
};

export const rightWrapperButons = {
  flex: "1 2 69%"
};
