import React from 'react';

import Style from '../style.js'

export const Header = props => (
    <div style={Style.titleWrapGroupClass}>
        {props.children}
    </div>
);

export default Header

