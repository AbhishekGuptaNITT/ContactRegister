import React from 'react'
import classes from './Search.module.css'

const Search = (props) => {
    return(
        <div className={classes.search}>
            <h1>SEARCH REGISTER</h1>
            <h4>
                <label>Tel: </label>
            </h4>
            <input type='text' id='stel' autoFocus></input>
            <button onClick={props.searchFun}>SEARCH</button>
        </div>
    )
}

export default Search