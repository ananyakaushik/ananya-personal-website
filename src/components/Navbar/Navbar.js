import React, { Component } from 'react';
import {Nav, Navbar} from 'react-bootstrap';

import classes from './Navbar.module.css';

// Component for the navigation bar
class Navigation extends Component {
    render() {
        return(
            <Navbar className={classes.Navbar} bg="white">
                <Navbar.Brand href="/" className={classes.NavbarBrand}>Ananya Kaushik</Navbar.Brand>
                <Nav className="ml-auto">
                    <Nav.Link href="/" className={classes.NavLink}>Home</Nav.Link>
                    <Nav.Link href="/books" className={classes.NavLink}>Books</Nav.Link>
                    <Nav.Link href="/about" className={classes.NavLink}>About</Nav.Link>
                </Nav>
            </Navbar>
        )
    }
}

export default Navigation;