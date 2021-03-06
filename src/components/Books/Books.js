import React, { Component } from 'react';
import {Container} from 'react-bootstrap';
import Navigation from '../Navbar/Navbar';
import Book from './Book/Book';

import classes from './Books.module.css';

class Books extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            bookInfo: []
        }
    }

    getBookInfo = (isbn) => {
        // Google Books API url to get information from
        const url = `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`;

        // Fetch information from Google Books API
        return fetch(url)
            // Read JSON response
            .then(response => response.json())
            .then(result => {
                // Return the result as an object
                let book = {
                    title: result.items[0].volumeInfo.title,
                    date: result.items[0].volumeInfo.publishedDate,
                    author: result.items[0].volumeInfo.authors[0],
                    genre: result.items[0].volumeInfo.categories[0],
                    rating: result.items[0].volumeInfo.averageRating,
                    description: result.items[0].volumeInfo.description,
                }
                return book;
            })
            // Log error if thrown
            .catch(error => {
                console.log("Error: ", error);
            });
    }

    componentDidMount() {
        // Object containing ISBNS
        const isbns = {
            "The Hunger Games": "9780545229937",
            "Six of Crows": "1627795227",
            "Circe": "1408890089",
            "The Hate U Give": "006249855X", //"0062498533",
            "A Gathering of Shadows": "0765376474"
        };

        // For each ISBN, get book information using API and add the book info to state
        Object.keys(isbns).forEach((isbn, index) => {
            let book;
            // Get book information
            this.getBookInfo(isbns[isbn]).then(result => {
                let newTitle, desc;

                // Get images from Open Library
                let image = `http://covers.openlibrary.org/b/isbn/${isbns[isbn]}-L.jpg`;
                if (index === 4) {
                    image = "http://covers.openlibrary.org/b/olid/OL26316204M-L.jpg";
                }

                // Cut 3 book descriptions/title to only include pertinent information
                if (index === 0) {
                    desc = result.description.substring(473, result.description.length);
                    newTitle = result.title.substring(0, 16)
                }

                if (index === 1) {
                    desc = result.description.substring(0, 935);
                }

                if (index === 3) {
                    desc = result.description.substring(531, (result.description.length-84));
                }

                // Create book object
                book = {
                    id: index,
                    ...result,
                    title: newTitle || result.title,
                    description: desc || result.description,
                    image: image
                }

                // Set state
                this.setState(prevState => ({
                    bookInfo: [...prevState.bookInfo, book]
                }));
            });
        });
    }
    
    render() {
        
        return(
            <div className={`${classes.booksDiv} h-100`} >
                <Navigation />

                <Container  className="h-100" fluid >

                    {/* List of Books */}
                    {/* If bookInfo state is populated, map Book array using info from API */}
                    {this.state.bookInfo && 
                    this.state.bookInfo
                        // Sort if information fetched is out of order
                        .sort((a, b) => a.id - b.id)
                        .map(item => {
                            return <Book key={item.id} {...item} />
                        })}
                
                </Container>

            </div>
        )
    }
}

export default Books;