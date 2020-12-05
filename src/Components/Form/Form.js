import React from 'react'
import classes from './Form.module.css'

const Form = (props) => {
    return(
        <div className={classes.form}>
            <h1>REGISTER YOUR FRIENDS!</h1>
            <h4>Connecting with the world for better reach!</h4>
            <form>
                <label>Name</label>
                <input type='text' autoFocus id='name'></input>
                <label>DOB</label>
                <input type='date' id='date'></input>
                <label>Contact Number</label>
                <input type='text' id='tel'></input>
                <input type='reset' id='reset' style={{width:'150px'}}></input>
                <a onClick={props.insertData}>REGISTER</a>
            </form>
        </div>
    )
}

export default Form