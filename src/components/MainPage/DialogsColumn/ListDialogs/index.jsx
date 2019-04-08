import React from "react";

import "./style.css";
import { ListItem } from "../ListItem";

const dialogsList = [
  {
    profileName: "Jon Smith",
    lastMessage: { idLastMessage: new Date().getTime(), text: "ok" }
  },
  {
    profileName: "Jon Smith",
    lastMessage: { idLastMessage: new Date().getTime(), text: "ok" }
  },
  {
    profileName: "Jon Smith",
    lastMessage: { idLastMessage: new Date().getTime(), text: "ok" }
  },
  {
    profileName: "Jon Smith",
    lastMessage: { idLastMessage: new Date().getTime(), text: "ok" }
  },
  {
    profileName: "Jon Smith",
    lastMessage: { idLastMessage: new Date().getTime(), text: "ok" }
  },
  {
    profileName: "Jon Smith",
    lastMessage: { idLastMessage: new Date().getTime(), text: "ok" }
  },
  {
    profileName: "Jon Smith",
    lastMessage: { idLastMessage: new Date().getTime(), text: "ok" }
  },
  {
    profileName: "Jon Smith",
    lastMessage: { idLastMessage: new Date().getTime(), text: "ok" }
  },
  {
    profileName: "Jon Smith",
    lastMessage: { idLastMessage: new Date().getTime(), text: "ok" }
  },
  {
    profileName: "Jon Smith",
    lastMessage: { idLastMessage: new Date().getTime(), text: "ok" }
  },
  {
    profileName: "Jon Smith",
    lastMessage: { idLastMessage: new Date().getTime(), text: "ok" }
  },
  {
    profileName: "Jon Smith",
    lastMessage: {
      idLastMessage: new Date().getTime(),
      text:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit odit recusandae, nihil cumque sint, nobis, nesciunt esse totam libero aperiam saepe temporibus architecto maxime cupiditate. Maxime quo itaque enim sit."
    }
  }
];

export const ListDialogs = () => (
  <ul className="dialogs-list">
    {dialogsList.map(({ profileName, lastMessage }) => (
      <ListItem
        key={lastMessage.idLastMessage}
        profileName={profileName}
        lastMessage={lastMessage}
      />
    ))}
  </ul>
);


