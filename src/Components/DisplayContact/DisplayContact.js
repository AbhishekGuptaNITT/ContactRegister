import React from 'react'
import classes from './DisplayContact.module.css'

const DisplayContact = (props) => {
    return(
        <div className={classes.displaycontact}>
            <h1>{props.name}</h1>
            <h3>{props.dob}</h3>
            <h2>{props.tel}</h2>
        </div>
    )
}
export default DisplayContact