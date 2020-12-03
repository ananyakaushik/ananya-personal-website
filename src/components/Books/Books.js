import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Book from './Book/Book';

class Books extends Component {
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