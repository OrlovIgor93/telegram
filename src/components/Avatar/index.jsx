import React from "react";
import { avatar, avatarMedium, avatarBig, colors } from "../MainPage/styles";

const getUserLetter = children => {
  const arrWord = children.split(" ");

  return arrWord.length === 1
    ? arrWord[0][0] + arrWord[0][1]
    : arrWord[0][0] + arrWord[1][0];
};

export const Avatar = ({ medium, big, style, src, name }) => {
  const userLetters = !src ? getUserLetter(name) : null;

  const stylesUsed = [
    avatar,
    medium ? avatarMedium : null,
    big ? avatarBig : null,
    !src ? { background: colors[userLetters[0].toLowerCase()] } : null,
    style
  ];

  const allStyle = stylesUsed.reduce(function(prev, curr) {
    return { ...prev, ...curr };
  }, {});

  return src ? (
    <img alt="avatar" style={allStyle} src={src} />
  ) : (
    <span style={allStyle}> {userLetters} </span>
  );
};
