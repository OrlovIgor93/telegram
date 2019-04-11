import React from "react";
import { HistoryListItem } from "../HistoryLisItem";
import { VerticalWrap } from "../../VerticalWrap";
import "./style.css";

export const HistoryList = () => (
  <VerticalWrap className="message-context" style={buttomPanelWrap}>
    {dialogMessages.map(({ profileName, dialogInfo }) => (
      <HistoryListItem
        key={dialogInfo.timeMessage}
        dialogInfo={profileName}
        lastMessage={dialogInfo}
      />
    ))}
  </VerticalWrap>
);
export const buttomPanelWrap = {
  margin: "0 auto",
  padding: "0 15px 0",
  overflow: "auto",
  flexDirection: "column-reverse"
};

const dialogMessages = [
  {
    profileName: {
      name: "Jon Smith",
      urlImg: ""
    },
    dialogInfo: { timeMessage: new Date().getTime(), text: "ok" }
  },
  {
    profileName: {
      name: "Jon Smith",
      urlImg: ""
    },
    dialogInfo: {
      timeMessage: new Date().getTime(),
      text: ` ipsum dolor sit amet consectetur adipisicing elit.
         Quidem quibusdam laborum incidunt ducimus deleniti, nulla 
         consequuntur numquam sequi! Hic at amet vero placeat voluptas 
         fuga laudantium dolorum labore asperiores quas!`
    }
  },
  {
    profileName: {
      name: "Clementine Bauch",
      urlImg: "https://via.placeholder.com/150/e09463"
    },
    dialogInfo: { timeMessage: new Date().getTime(), text: "ok" }
  },
  {
    profileName: {
      name: "Jon Smith",
      urlImg: ""
    },
    dialogInfo: {
      timeMessage: new Date().getTime(),
      text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
         Quidem quibusdam laborum incidunt ducimus deleniti, nulla 
         consequuntur numquam sequi! Hic at amet vero placeat voluptas 
         fuga laudantium dolorum labore asperiores quas!`
    }
  },
  {
    profileName: {
      name: "Clementine Bauch",
      urlImg: "https://via.placeholder.com/150/e09463"
    },
    dialogInfo: { timeMessage: new Date().getTime(), text: "ok" }
  },
  {
    profileName: {
      name: "Jon Smith",
      urlImg: ""
    },
    dialogInfo: {
      timeMessage: new Date().getTime(),
      text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
         Quidem quibusdam laborum incidunt ducimus deleniti, nulla 
         consequuntur numquam sequi! Hic at amet vero placeat voluptas 
         fuga laudantium dolorum labore asperiores quas!`
    }
  },
  {
    profileName: {
      name: "Clementine Bauch",
      urlImg: "https://via.placeholder.com/150/e09463"
    },
    dialogInfo: { timeMessage: new Date().getTime(), text: "ok" }
  },
  {
    profileName: {
      name: "Jon Smith",
      urlImg: ""
    },
    dialogInfo: {
      timeMessage: new Date().getTime(),
      text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
         Quidem quibusdam laborum incidunt ducimus deleniti, nulla 
         consequuntur numquam sequi! Hic at amet vero placeat voluptas 
         fuga laudantium dolorum labore asperiores quas!`
    }
  },
  {
    profileName: {
      name: "Clementine Bauch",
      urlImg: "https://via.placeholder.com/150/e09463"
    },
    dialogInfo: { timeMessage: new Date().getTime(), text: "ok" }
  },
  {
    profileName: {
      name: "Jon Smith",
      urlImg: ""
    },
    dialogInfo: {
      timeMessage: new Date().getTime(),
      text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
         Quidem quibusdam laborum incidunt ducimus deleniti, nulla 
         consequuntur numquam sequi! Hic at amet vero placeat voluptas 
         fuga laudantium dolorum labore asperiores quas!`
    }
  },
  {
    profileName: {
      name: "Clementine Bauch",
      urlImg: "https://via.placeholder.com/150/e09463"
    },
    dialogInfo: { timeMessage: new Date().getTime(), text: "ok" }
  },
  {
    profileName: {
      name: "Clementine Bauch",
      urlImg: "https://via.placeholder.com/150/e09463"
    },
    dialogInfo: {
      timeMessage: new Date().getTime(),
      text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
         Quidem quibusdam laborum incidunt ducimus deleniti, nulla 
         consequuntur numquam sequi! Hic at amet vero placeat voluptas 
         fuga laudantium dolorum labore asperiores quas!`
    }
  }
];
