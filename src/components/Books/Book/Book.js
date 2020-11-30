import React from 'react';
import plc from '../../../placeholder.png';
import classes from './Book.module.css';

const Book = (props) => {
    return(
        <div className={classes.bookDiv}>
            <div className={classes.bookImg}>
                <img src={plc} alt="image" />
            </div>
            <div className={classes.bookDesc}>
                <div className={classes.listDiv}>
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
        </div>
    )
}

export default Book;