import React from 'react'
import classes from './Nav.module.css'
import Addcontact from '../AddContact/Addcontact'
const Nav = (props) => {
    return(
        <div className={classes.nav}>
            <h2 className={classes.brand}>Contact Register</h2>
            <div className={classes.options}>
                <Addcontact 
                 addContactHandler = {props.addnew}
                />
                <a className={classes.btn} onClick={() => window.location.reload()}>REFRESH</a>
            </div>
        </div>
    )
}

export default Nav