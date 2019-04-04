import React from "react";
import { ListItem } from "../../DialogsColumn/ListItem";

import "./style.css";

export const HistoryList = () => (
  <ul className="message-context">
    {dialogMessages.map(({ profileName, lastMessage }) => (
      <ListItem
        key={lastMessage.idLastMessage}
        profileName={profileName}
        lastMessage={lastMessage}
      />
    ))}
  </ul>
);

const dialogMessages = [
    {
        profileName: "Jon Smith",
        lastMessage: { idLastMessage: new Date().getTime(), text: "ok" }
    },
    {
        profileName: "Jon Smith",
        lastMessage: {
            idLastMessage: new Date().getTime(),
            text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
         Quidem quibusdam laborum incidunt ducimus deleniti, nulla 
         consequuntur numquam sequi! Hic at amet vero placeat voluptas 
         fuga laudantium dolorum labore asperiores quas!`
        }
    },
    {
        profileName: "Jon Smith",
        lastMessage: { idLastMessage: new Date().getTime(), text: "ok" }
    },
    {
        profileName: "Jon Smith",
        lastMessage: {
            idLastMessage: new Date().getTime(),
            text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
         Quidem quibusdam laborum incidunt ducimus deleniti, nulla 
         consequuntur numquam sequi! Hic at amet vero placeat voluptas 
         fuga laudantium dolorum labore asperiores quas!`
        }
    },
    {
        profileName: "Jon Smith",
        lastMessage: { idLastMessage: new Date().getTime(), text: "ok" }
    },
    {
        profileName: "Jon Smith",
        lastMessage: {
            idLastMessage: new Date().getTime(),
            text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
         Quidem quibusdam laborum incidunt ducimus deleniti, nulla 
         consequuntur numquam sequi! Hic at amet vero placeat voluptas 
         fuga laudantium dolorum labore asperiores quas!`
        }
    },
    {
        profileName: "Jon Smith",
        lastMessage: { idLastMessage: new Date().getTime(), text: "ok" }
    },
    {
        profileName: "Jon Smith",
        lastMessage: {
            idLastMessage: new Date().getTime(),
            text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
         Quidem quibusdam laborum incidunt ducimus deleniti, nulla 
         consequuntur numquam sequi! Hic at amet vero placeat voluptas 
         fuga laudantium dolorum labore asperiores quas!`
        }
    },
    {
        profileName: "Jon Smith",
        lastMessage: { idLastMessage: new Date().getTime(), text: "ok" }
    },
    {
        profileName: "Jon Smith",
        lastMessage: {
            idLastMessage: new Date().getTime(),
            text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
         Quidem quibusdam laborum incidunt ducimus deleniti, nulla 
         consequuntur numquam sequi! Hic at amet vero placeat voluptas 
         fuga laudantium dolorum labore asperiores quas!`
        }
    },
    {
        profileName: "Jon Smith",
        lastMessage: { idLastMessage: new Date().getTime(), text: "ok" }
    },
    {
        profileName: "Jon Smith",
        lastMessage: {
            idLastMessage: new Date().getTime(),
            text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
         Quidem quibusdam laborum incidunt ducimus deleniti, nulla 
         consequuntur numquam sequi! Hic at amet vero placeat voluptas 
         fuga laudantium dolorum labore asperiores quas!`
        }
    }
];

