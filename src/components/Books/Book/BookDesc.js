import React from 'react';
import classes from './Book.module.css';

// Component for the description adjacent to the book's image
const BookDesc = (props) => {
    return(
        <div className={props.className}>
            <div className={classes.ListDiv}>
                {/* List of Book's attributes */}
                <ul>
                    <li>Title: {props.title}</li>
                    <li>Author: {props.author}</li>
                    <li>Goodreads Rating: {props.rating}</li>
                    <li>Synopsis: {props.description}</li>
                    <li>Review: </li>
                </ul>
            </div>
        </div>
    );
}

export default BookDesc;