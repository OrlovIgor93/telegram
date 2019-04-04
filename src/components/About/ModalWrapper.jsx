import React from "react";
import "./style.css";
import {Heading} from "./Heading";
import {ModalBody} from "./ModalBody";

export const ModalWrapper = () => (
    <div className="wrapper">
        <Heading/>
        <ModalBody/>
    </div>
);