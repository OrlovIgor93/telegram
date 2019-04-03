import React from 'react';
import classNames from 'classnames';

import './style.css'

export const Avatar = ({ children, className, ...attrs})=>{

    const classes = classNames(
        'avatar',
        className,   
    );

const Tag = attrs.src ? 'img':'p';

    return(
        <Tag className={classes}
            {...attrs}
         >
         {children}
         </Tag>
     
    );
};