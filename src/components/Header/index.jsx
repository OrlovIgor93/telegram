import React from "react";
import { Link } from "react-router-dom";

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
      <h2>Liza Smitt</h2>
    </div>
  </div>
);
