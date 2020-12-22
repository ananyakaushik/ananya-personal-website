import React from 'react';
import BookImage from './BookImage';
import BookDesc from './BookDesc';
import classes from './Book.module.css';

// Component for each individual Book
const Book = (props) => {
    
    // alternate styling of the book's description (with its alternate positioning)
    const bookDescStyle = (props.id % 2 !== 0) ? classes.BookDescLeft : classes.BookDescRight;

    return(
        <div className={classes.BookDiv}>
            {/* alternate the position of the book's image */}
            {props.id % 2 === 0 && <BookImage />}

            <BookDesc
                className={bookDescStyle}
                title={props.title}
                date={props.date}
                author={props.author}
                genre={props.genre}
                rating={props.rating}
                description={props.description} />
                
            {props.id % 2 !== 0 && <BookImage />}
        </div>
    )
}

export default Book;