import React from 'react';
import Style from '../style.js'

export const Header = () => (
    <div style={Style.titleWrapGroupPageClass}>
        <div style={Style.newGroupPageClass}>New Group</div>
        <div style={Style.closeGroupPageClass}>Close</div>
    </div>
);