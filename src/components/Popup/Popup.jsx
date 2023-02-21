import React from 'react';
import {createPortal} from "react-dom";
import classes from "./Popup.module.css";

const Popup = ({isOpen, setIsOpen, children}) => {

    function closePopup(event) {
        setIsOpen(false);
    }

    if (isOpen) {
        return createPortal(
            (
                <div className={classes.popup} onClick={closePopup}>
                    <div className={classes.popup_content} onClick={(event)=>event.stopPropagation()}>
                        {children}
                    </div>
                </div>
            ),
            document.querySelector("#portal")
        );
    } else return null;
};

export default Popup;