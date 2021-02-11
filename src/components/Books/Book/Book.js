import React from 'react';
import {Row} from 'react-bootstrap';
import BookImage from './BookImage';
import BookDesc from './BookDesc';
import classes from './Book.module.css';

// Component for each individual Book
const Book = (props) => {
    
    // alternate styling float direction of the book's description and image
    const bookDescFloat = (props.id % 2 === 0) ? "float-md-right" : "float-md-left";
    const imgFloat = (props.id % 2 === 0) ? "float-md-left" : "float-md-right";

    return(
        <Row className={classes.BookDiv}>

            {/* alternate the position of the book's image */}
            <div>
                <BookImage float={imgFloat}/>
                <BookDesc
                    float={bookDescFloat}
                    title={props.title}
                    date={props.date}
                    author={props.author}
                    genre={props.genre}
                    rating={props.rating}
                    description={props.description} />
            </div>
            {/* <div className="w-100">{props.id < 4 && <hr className={classes.hr} />}</div> */}
        </Row>
    )
}

export default Book;