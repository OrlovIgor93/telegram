import React from "react";
import Dialog from "@material-ui/core/Dialog/index";

export const ModalWrap = ({ open, children, handleClose }) => (
    <Dialog open={open} onClose={handleClose}>
        {children}
    </Dialog>
);

