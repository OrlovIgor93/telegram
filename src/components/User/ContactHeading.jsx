import React from "react";
import {Link} from "react-router-dom";

import {Description} from "../Settings/Description"
import {style} from "../LeraStyles/style";

export const ContactHeading = ({ imgurl, name }) => (
         <div
           style={{
             backgroundColor: "rgb(85, 128, 163)",
             color: "#fff",
             paddingLeft: 28 + "px"
           }}
         >
           {(() => {
             console.log("----ContactHeading", imgurl);
           })()}
           <div style={style.titles}>
             <div>Contact Info</div>
             <div style={style.linksRight}>
               <Link to="/">Close</Link>
             </div>
           </div>
           <Description imgurl={imgurl} name={name} />
         </div>
       );