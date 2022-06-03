import React from 'react';

import classes from './Dialog.module.css';

const Dialog = (props) => {
    return <div className={`${classes.card} ${props.className}`}>{props.children}</div>;
}

export default Dialog;
