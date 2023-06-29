import React from 'react'
import classes from './MyInput.module.css';


export const MyInput = (props) => {
    return (
        <input {...props} type="text" className={classes.myInput} />
    )
};


