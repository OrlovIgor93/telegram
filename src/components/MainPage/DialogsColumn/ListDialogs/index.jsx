import React from "react";
import { listDialogs} from "../../../../mock/listDialogs";
import "./style.css";
import { ListItem } from "../ListItem";

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


