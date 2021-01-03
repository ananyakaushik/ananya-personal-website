import React, { Component } from 'react';
// import { NavLink } from 'react-router-dom';
import {Nav, Navbar} from 'react-bootstrap';

import classes from './Navbar.module.css';



// Component for the navigation bar
class Navigation extends Component {
    render() {
        return(
            <Navbar bg="white">
                <Navbar.Brand href="/" className={classes.NavbarBrand}>Ananya Kaushik</Navbar.Brand>
                <Nav className="ml-auto">
                    <Nav.Link href="/" className={classes.NavLink}>Home</Nav.Link>
                    <Nav.Link href="/books" className={classes.NavLink}>Books</Nav.Link>
                    <Nav.Link href="/about" className={classes.NavLink}>About</Nav.Link>
                </Nav>
            </Navbar>
            // <div>
            //     <nav className={classes.Nav}>
            //         {/* Links to each section/page of website */}
            //         <ul className={classes.ul}>

            //             <li className={classes.li}>
            //                 <NavLink to="/">Home</NavLink>
            //             </li>

            //             <li className={classes.li}>
            //                 <NavLink to="/books">Books</NavLink>
            //             </li>

            //             <li className={classes.li}>
            //                 <NavLink to="/about">About Me</NavLink>
            //             </li>
                        
            //         </ul>
            //     </nav>
            // </div>
        )
    }
}

export default Navigation;