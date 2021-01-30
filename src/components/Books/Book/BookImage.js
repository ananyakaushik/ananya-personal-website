import React from 'react';
import {Col} from 'react-bootstrap';
import plc from '../../../placeholder.png';
import classes from './Book.module.css';

// Component for the book's image
const BookImage = (props) => {
    return(
        <Col className={classes.BookImg} lg={4} md={4} >
            <img src={plc} alt="Name of Book" />
        </Col>
    );
}

export default BookImage;