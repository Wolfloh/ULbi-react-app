import React from 'react'
import classes from './MyInput.module.scss';


export const MyInput = (props) => {
    return (
        <input {...props} type="text" className={classes.myInput} />
    )
};


