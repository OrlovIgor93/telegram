import React from "react";
import { Link } from "react-router-dom";
import { Title,SubTitle, BodyText } from "../MainPage/Typography";

import "./style.css";

export const Header = () => (
         <div className="wrapHeader">
           <div className="headerLeftMenu">
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
           <div className="headerTitle">
             <Title style={{ color: "#fff", paddingRight: 5 }}>
               Liza Smitt
             </Title>
             <BodyText style={{ color: "#b9cfe3" }}>online</BodyText>
           </div>
         </div>
       );
