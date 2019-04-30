import { useState } from "react";




export const usePortals = () => {
    const [openModal, setOpenModal] = useState({open: false, name: ""});
    const [anchorLeftMenu, setAnchorLeftMenu] = useState(null);

    const handleClickOpenModal = (value) => {
        setOpenModal({open: true, name: value});
        setAnchorLeftMenu(null);
    };

    const handleCloseModal = () => {
        setOpenModal({open: false, name: ""});
    };


    return {
        openModal,
        anchorLeftMenu,
        setAnchorLeftMenu,
        handleClickOpenModal,
        handleCloseModal,
    };

};