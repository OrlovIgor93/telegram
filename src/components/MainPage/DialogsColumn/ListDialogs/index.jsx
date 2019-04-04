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
    lastMessage: { idLastMessage: new Date().getTime(), text: "ok" }
  }
];

export const ListDialogs = () => (
  <ul className="dialogs-list">
    {dialogsList.map(({ timeLastMessage, profileName, lastMessage }) => (
      <ListItem
        key={lastMessage.idLastMessage}
        profileName={profileName}
        lastMessage={lastMessage}
      />
    ))}
  </ul>
);
