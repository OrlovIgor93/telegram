import React from "react";
import { Link } from "react-router-dom";
import { Title, BodyText } from "../MainPage/Typography";

import "./style.css";

export const Header = () => (
  <div className="wrapHeader">
    <div className="headerLeftMenu">
      <Link className="navButton" to="/about">
        About
      </Link>

      <Link className="navButton" to="/contact">
        User
      </Link>

      <Link className="navButton" to="contact">
        Contact
      </Link>

      <Link className="navButton" to="group">
        Group
      </Link>
    </div>
    <div className="headerTitle">
      <Title style={{ color: "#fff", paddingRight: 5 }}>Liza Smitt</Title>
      <BodyText style={{ color: "#b9cfe3" }}>online</BodyText>
    </div>
  </div>
);
