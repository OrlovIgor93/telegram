import React from "react";
import { Header } from "../Header";
import { DialogsColumn } from "./DialogsColumn";
import { HistoryColumn } from "./HistoryColumn";

import "./style.css";

export const MainPage = () => (
  <div className="wrapPage">
    <Header />

    <div className="wrapPageContext">
      <DialogsColumn />
      <HistoryColumn />
    </div>
  </div>
);
