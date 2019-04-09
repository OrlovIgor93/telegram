import React from "react";

import {Title} from "./Title";
import {Description} from "./Description";
import {LeraStyle} from "../LeraStyles/styles";

export const AboutHeading = () => (
    <div style={LeraStyle.Head}>
        <Title/>
        <Description/>
    </div>
);
