import React, { useState, useEffect } from "react";


const withModal = (View) => {
    return ({ open, ...other }) => {
        const [openModal, setOpenModal] = useState(false);

        useEffect(() => {
            if (open) {
                setOpenModal(true)
            }
        }, [open]);

        const handleCloseModal = () => {
            setOpenModal(false);
        };

        if (openModal) {
            return <View {...other} openModal={openModal} handleCloseModal={handleCloseModal}/>;
        } else {
            return null
        }

    };
};

export default withModal;