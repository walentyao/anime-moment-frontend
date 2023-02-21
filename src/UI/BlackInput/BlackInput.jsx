import React from 'react';
import classes from "./BlackInput.module.css";

const BlackInput = ({optionallyStyle, ...props}) => {
    return (<input {...props}
                   className={classes.black_input + ' ' + optionallyStyle}
    />);
};

export default BlackInput;