import React from 'react';
import classes from './BlackButton.module.css';

const BlackButton = ({onClick, children}) => {

    return (
        <button className={classes.btn} onClick={onClick}>
            {children}
        </button>
    );
};

export default BlackButton;