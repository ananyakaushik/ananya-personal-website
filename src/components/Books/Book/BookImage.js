import React from 'react';
import plc from '../../../placeholder.png';
import classes from './Book.module.css';

// Component for the book's image
const BookImage = (props) => {
    return(
        <div className={classes.BookImg}>
            <img src={plc} alt="Name of Book" />
        </div>
    );
}

export default BookImage;