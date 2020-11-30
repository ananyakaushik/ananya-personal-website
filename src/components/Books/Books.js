import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Book from './Book/Book';

class Books extends Component {
    render() {
        return(
            <div style={{zIndex: 10, display: 'inline-block', height: '100%', width: '100%', alignContent: 'center', justifyContent:'center'}}>
                <Navbar />
                <Book />
                <Book />
                <Book />
                <Book />
                <Book />
            </div>
        )
    }
}

export default Books;