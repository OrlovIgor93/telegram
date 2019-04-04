import React from "react";
import { Link } from "react-router-dom";
import { Avatar } from "../../Avatar";
import { Dialog } from './Dialog';
import { HistoryList } from "./HistoryList"

import "./style.css";

export const HistoryColumn = () => (
  <div className="history">
  <Dialog />
   <HistoryList />


    
  </div>
);
