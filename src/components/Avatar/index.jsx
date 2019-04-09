import React from "react";

import { avatarStyle, colors } from "../MainPage/styles";

export const Avatar = ({ children, ...attrs }) => {

  let style = attrs.medium
    ? { ...avatarStyle.small, ...avatarStyle.medium, ...attrs.style }
    : attrs.big
    ? { ...avatarStyle.small, ...avatarStyle.big, ...attrs.style }
    : { ...avatarStyle.small, ...attrs.style };

  const getUserLetter = () => {
    const arrWord = children.split(" ");

    const letters =
      arrWord.length === 1
        ? arrWord[0][0] + arrWord[0][1]
        : arrWord[0][0] + arrWord[1][0];

    style = { ...style, background: colors[letters[0].toLowerCase()] };  
  
    return letters;
  };

  const userLetters = !attrs.src ? getUserLetter() : children;

  return attrs.src ? (
    <img alt="avatar" style={style} src={attrs.src} />
  ) : (
    <p style={style}>{userLetters} </p>
  );
};






