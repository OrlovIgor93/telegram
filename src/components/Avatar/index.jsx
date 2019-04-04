import React from "react";
import classNames from "classnames";

import "./style.css";

export const Avatar = ({ children, className, ...attrs }) => {
  const classes = classNames("avatar", className);

  const Tag = attrs.src ? "img" : "p";

  const getUserLetter = () => {
    const arrWord = children.split(" ");
    console.log(arrWord);
    const letters =
      arrWord.length === 1
        ? arrWord[0][0] + arrWord[0][1]
        : arrWord[0][0] + arrWord[1][0];
    return letters;
  };

  const userLeter = Tag === "p" ? getUserLetter() : children;
  return (
    <Tag className={classes} {...attrs}>
      {userLeter}
    </Tag>
  );
};
