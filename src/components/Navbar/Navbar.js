import React, { Component } from 'react';
import {Nav, Navbar} from 'react-bootstrap';

import classes from './Navbar.module.css';

// Component for the navigation bar
class Navigation extends Component {
    render() {
        return(
            <Navbar className={classes.Navbar} bg="white" expand="lg">
                <Navbar.Brand href="/" className={classes.NavbarBrand}>Ananya Kaushik</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className={classes.Toggle} />
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="ml-auto">
                        <Nav.Link href="/books" className={classes.NavLink}>Books</Nav.Link>
                        <Nav.Link href="/about" className={classes.NavLink}>About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Navigation;