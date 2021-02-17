import React from 'react';
import {Col} from 'react-bootstrap';
import classes from './Book.module.css';

// Component for the book's image
const BookImage = (props) => {
    return(
        <Col className={`${classes.BookImg} ${props.float}`} lg={4} md={4} >
            <img src={props.src} alt={props.title} />
        </Col>
    );
}

export default BookImage;