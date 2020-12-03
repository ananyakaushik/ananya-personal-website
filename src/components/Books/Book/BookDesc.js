import React from 'react';
import classes from './Book.module.css';

// Component for the description adjacent to the book's image
const BookDesc = (props) => {
    return(
        <div className={props.className}>
            <div className={classes.ListDiv}>
                {/* List of Book's attributes, some to be filled in by the API */}
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