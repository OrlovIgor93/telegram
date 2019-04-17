import React from "react";
import {Link} from "react-router-dom";
import CloseIcon from '@material-ui/icons/Close'
import {Description} from "./Description"
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
               <Link to="/">
                   <CloseIcon style={{color:'white'}}/>
               </Link>
             </div>
           </div>
           <Description imgurl={imgurl} name={name} />
         </div>
       );