import React from 'react';
import classes from './Book.module.css';

const BookDesc = (props) => {
    return(
        <div className={props.className}>
            <div className={classes.ListDiv}>
                <ul>
                    <li>Title:</li>
                    <li>Author: </li>
                    <li>Goodreads Rating: </li>
                    <li>Synopsis: </li>
                    <li>Review: </li>
                    <li>Add button</li>
                </ul>
            </div>
        </div>
    );
}

export default BookDesc;