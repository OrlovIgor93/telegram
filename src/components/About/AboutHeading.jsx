import React from "react";

import {Title} from "./Title";
import {Description} from "./Description";
import {style} from "../LeraStyles/style";

export const AboutHeading = () => (
    <div style={style.head}>
        <Title/>
        <Description/>
    </div>
);
