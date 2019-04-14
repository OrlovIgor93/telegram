import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { avatarSmall, avatarMedium, avatarBig, colors } from "../MainPage/styles";

const getUserLetter = children => {
  const arrWord = children.split(" ");

  return arrWord.length === 1
    ? arrWord[0][0] + arrWord[0][1]
    : arrWord[0][0] + arrWord[1][0];
};

export const AvatarApp = ({small, medium, big, src, name, style, ...attrs }) => {
         const userLetters = !src ? getUserLetter(name) : null;

         const stylesUsed = [
           avatarSmall,
           medium ? avatarMedium : null,
           big ? avatarBig : null,
           !src
             ? { background: colors[userLetters[0].toLowerCase()] }
             : null,
           style
         ];

         const allStyle = stylesUsed.reduce(function(prev, curr) {
           return { ...prev, ...curr };
         }, {});

         return src ? (
           <Avatar src={src} style={allStyle} />
         ) : (
           <Avatar {...attrs} style={allStyle}>
             {userLetters}
           </Avatar>
         );
       };
