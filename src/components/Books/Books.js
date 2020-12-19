import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Book from './Book/Book';
import { parseString } from 'xml2js';

class Books extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            bookInfo: []
        }
    }

    getBookInfo = (isbn) => {
        // Goodreads API url to get information from
        const format = "xml";
        const key = process.env.REACT_APP_GOODREADS_API_KEY;
        const user = "ananyakaushik" //https://cors-anywhere.herokuapp.com/
        const url = `https://cors-anywhere.herokuapp.com/https://www.goodreads.com/book/isbn/${isbn}?format=${format}&user_id=${user}&key=${key}`;

        // Fetch information from goodreads API
        return fetch(url)
            // read response
            .then(response => response.text())
            .then(response => {
                // Convert xml to json and return the result as an object
                let book;
                parseString(response, function (err, result) {
                    // Object of book information fetched using API
                    book = {
                        title: result.GoodreadsResponse.book[0].work[0].original_title[0],
                        author: result.GoodreadsResponse.book[0].authors[0].author[0].name[0],
                        rating: result.GoodreadsResponse.book[0].average_rating[0],
                        description: result.GoodreadsResponse.book[0].description[0]
                    }
                });
                return book;
            })
            // Log error if thrown
            .catch(error => {
                console.log("Error: ", error);
            });
    }

    componentDidMount() {
        // {"thg": "0439023483", "soc": "1627792120", "circe": "0316556343",
        // "the hate u give": "0062498533", "a gathering of shadows": "0765376474"}
        // List of ISBNS
        const isbns = ["0439023483", "1627792120", "0316556343", "0062498533", "0765376474"];

        // For each ISBN, get book information using API and add the book info to state
        isbns.forEach((isbn, index) => {
            let book;
            // Get book information
            this.getBookInfo(isbn).then(result => {
                book = {
                    id: index,
                    ...result
                }
                // Set state
                this.setState(prevState => ({
                    bookInfo: [...prevState.bookInfo, book]
                }));
            });
        });

        fetch('https://www.googleapis.com/books/v1/volumes?q=isbn:0439023483')
            .then(response => response.json())
            .then(response => {
                console.log(response.items[0].volumeInfo);
                console.log(response.items[0].volumeInfo.title);
                console.log(response.items[0].volumeInfo.publishedDate);
                console.log(response.items[0].volumeInfo.authors[0]);
                console.log(response.items[0].volumeInfo.categories);
                console.log(response.items[0].volumeInfo.description);
                console.log(response.items[0].volumeInfo.averageRating);
            })
            .catch(error => console.log('Error:', error));
    }
    
    render() {
        
        return(
            <div style={{zIndex: 10, display: 'inline-block', height: '100%', width: '100%', alignContent: 'center', justifyContent:'center'}}>
                <Navbar />

                {/* List of Books */}
                {/* If bookInfo state is populated, map Book array using info from API */}
                {this.state.bookInfo && 
                this.state.bookInfo
                    // Sort if information fetched is out of order
                    .sort((a, b) => a.id - b.id)
                    .map(item => {
                        return <Book key={item.id} {...item} />
                    })}

            </div>
        )
    }
}

export default Books;