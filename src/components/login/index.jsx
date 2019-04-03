import React from "react";
import { Link } from "react-router-dom"
import "./style.css";

export const LoginPage = () => (
         <div className="head">
           <div className="wrap">
             <div className="title_wrap">
               <div className="img_wrap">
                 <img src="https://web.telegram.org/img/Telegram72.png" />
               </div>
               <div className="name_title">Telegram</div>
               <div className="next_wrap">
                 <Link className="next" to="main">
                   Next &gt;
                 </Link>
               </div>
             </div>
             <div className="login_wrap">
               <div className="login_container">
                 <h1>Sign in</h1>
                 <p>
                   Please choose your country and enter your full phone
                   number.
                 </p>
                 <select className="country_input">
                   <option>Belarus</option>
                 </select>
                 <br />
                 <input className="code_input" defaultValue={+375} />
                 <input type="number" className="telephone_input" />
                 <br />
               </div>
             </div>
             <div className="footer_wrap">
               <p className="welcome-footer">
                 Welcome to the EPAM telegram web-client.
               </p>
               <a className="learn-more" href="../about/about.html">
                 Learn more
               </a>
             </div>
           </div>
         </div>
       );

