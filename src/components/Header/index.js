import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

export const Header = () => (
         <div className="wrapHeader">
           <div className="headerLeftMenu">
             <div className="navButton">
               <Link to="/about">About</Link>
             </div>
      <div className="navButton">
               <Link to="/contact">User</Link>
             </div>
      <div className="navButton">
               <Link to="login">Login</Link>
             </div>
           </div>
           <div className="headerTitle">
             <h2>Liza Smitt</h2>
           </div>
         </div>
       );
