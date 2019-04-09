import React from "react";
import { listDialogs} from "../../../../mock/listDialogs";
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
    {listDialogs.map(({id, dialogInfo, lastMessage }) => (
      <ListItem
        key={id}
        dialogInfo={dialogInfo}
        lastMessage={lastMessage}
      />
    ))}
  </ul>
);


