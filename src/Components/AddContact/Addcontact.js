import React from 'react'
import classes from './Addcontact.module.css'

const Addcontact = (props) => {

    return(
        <a className={classes.Addcontact}
         onClick={props.addContactHandler}
        >
            ADD NEW CONTACT
        </a>
    )
}

export default Addcontact