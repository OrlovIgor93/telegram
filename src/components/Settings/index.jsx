import React from "react";
import {SettingsHeader} from "./SettingsHeader"
import {SettingsBody} from "./SettingsBody"
import PaperSheet from "../PaperSheet/PaperSheet";

export const Settings = () => (
    <PaperSheet>
        <SettingsHeader/>
        <SettingsBody/>
    </PaperSheet>
);

