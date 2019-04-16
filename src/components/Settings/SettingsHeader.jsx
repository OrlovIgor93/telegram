import React from 'react';
import {Titles} from "./Titles"
import {Description} from "./Description"
import {style} from "../LeraStyles/style";

export const SettingsHeader = ({ imgurl , name}) => (
         <div style={style.head}>
           <Titles />
           <Description imgurl={imgurl} name={name}/>
         </div>
       );