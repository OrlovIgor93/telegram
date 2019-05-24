import React from "react";

import {Title} from "./Title";
import {Description} from "./Description";
import {style} from "../styles";

export const AboutHeading = ({onClose}) => (
    <div style={style.head}>
        <Title onClose={onClose}/>
        <Description/>
    </div>

);
