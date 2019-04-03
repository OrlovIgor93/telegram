import React from 'react';
import classNames from 'classnames';

import './Button.css';

export const Button = ({
    children, onClick, className,   ...attrs
}) => {


  const classes = classNames(
    'btn',
    className,
  );

  const Tag = attrs.href ? 'a' : 'button';

  return (
    <Tag
      className={classes}
      onClick={onClick}
      {...attrs}
    >
      {children}
    </Tag>
  );
};