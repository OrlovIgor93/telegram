import React from "react";
// import { ListItem } from "../../DialogsColumn/ListItem";

import "./style.css";

export const HistoryList = () => (
         
           <ul className="message-context">
             {dialogMessages.map(({ profileName, dialogInfo }) => (
               <li key={dialogInfo.timeMessage}>
                 <h2>{profileName.name}</h2>
                 <h2>{profileName.url}</h2>
                 <h2>{dialogInfo.timeMessage}</h2>
                 <h2>{dialogInfo.text}</h2>
               </li>
             ))}
           </ul>
         
       );


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
