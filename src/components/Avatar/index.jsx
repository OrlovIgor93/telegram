import React from 'react';

import './style.css'

export const Avatar = ({children, ...attrs})=>{
const Tag = attrs.src ? 'img':'p';

    return(
        <Tag className="avatar"
            {...attrs}
        >
            {children}
        </Tag>
    );
};