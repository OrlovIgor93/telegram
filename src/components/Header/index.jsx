import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "../MainPage/Typography";

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
             <Typography
               style={{ color: "#fff", paddingRight: 5 }}
               variant="title"
             >
               Liza Smitt
             </Typography>
             <Typography style={{ color: "#b9cfe3" }} variant="body">
               online
             </Typography>
           </div>
         </div>
       );
