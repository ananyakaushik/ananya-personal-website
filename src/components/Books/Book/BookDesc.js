import React from 'react';
import {Col} from 'react-bootstrap';
import classes from './Book.module.css';

// Component for the description adjacent to the book's image
const BookDesc = (props) => {
    return(
        <Col className={classes.BookDesc} lg={8} md={8} >
            <div className={classes.ListDiv}>
                {/* List of Book's attributes */}
                <ul>
                    <li>Title: {props.title}, {props.date}</li>
                    <li>Author: {props.author}</li>
                    <li>Genre: {props.genre}</li>
                    <li>Rating: {props.rating}</li>
                    <br />
                    <li>{props.description}</li>
                </ul>
            </div>
        </Col>
    );
}

export default BookDesc;