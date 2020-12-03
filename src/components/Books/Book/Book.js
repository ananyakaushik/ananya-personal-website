import React from 'react';
import BookImage from './BookImage';
import BookDesc from './BookDesc';
import classes from './Book.module.css';

const Book = (props) => {
    
    const bookDescStyle = (props.id % 2 === 0) ? classes.BookDescLeft : classes.BookDescRight;

    return(
        <div className={classes.BookDiv}>
            {props.id % 2 !== 0 && <BookImage />}
            <BookDesc className={bookDescStyle} />
            {props.id % 2 === 0 && <BookImage />}
        </div>
    )
}

export default Book;