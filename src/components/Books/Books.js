import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Book from './Book/Book';
import { parseString } from 'xml2js';

class Books extends Component {

    componentDidMount() {
        // var isbn = "1627792120"; // soc
        // 0316556343 // circe
        // 0062498533 // the hate u give
        // 0765376474 // a gathering of shadows
        var isbn = "0439023483" // thg
        var format = "xml";
        var key = process.env.REACT_APP_GOODREADS_API_KEY;
        var user = "ananyakaushik"
        var url = `https://cors-anywhere.herokuapp.com/https://www.goodreads.com/book/isbn/${isbn}?format=${format}&user_id=${user}&key=${key}`;
        // let request = new Request(url, {
        //     method: 'GET',
        //     headers: new Headers(),
        //     mode: 'cors',
        // }); 

        fetch(url)
            .then(response => response.text())
            .then(response => {
                parseString(response, function (err, result) {
                    console.log("title:", result.GoodreadsResponse.book[0].work[0].original_title[0]);
                    console.log("author:", result.GoodreadsResponse.book[0].authors[0].author[0].name[0]);
                    console.log("rating:", result.GoodreadsResponse.book[0].average_rating[0]);
                    console.log("description:", result.GoodreadsResponse.book[0].description[0]);
                });
            })
            // .then(response => {
            //     const bookInfo = response;
            //     console.log("book", bookInfo);
            // })
            .catch(error => {
                console.log("Error: ", error);
            });
    }
    
    render() {
        return(
            <div style={{zIndex: 10, display: 'inline-block', height: '100%', width: '100%', alignContent: 'center', justifyContent:'center'}}>
                <Navbar />
                {/* List of Books */}
                {/* TODO: map Book array and use info from API */}
                <Book id="1"/>
                <Book id="2"/>
                <Book id="3"/>
                <Book id="4"/>
                <Book id="5"/>
            </div>
        )
    }
}

export default Books;