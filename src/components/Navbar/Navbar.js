import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';

// Component for the navigation bar
class Navbar extends Component {
    render() {
        return(
            <div>
                <nav className={classes.Nav}>
                    {/* Links to each section/page of website */}
                    <ul className={classes.ul}>

                        <li className={classes.li}>
                            <NavLink to="/">Home</NavLink>
                        </li>

                        <li className={classes.li}>
                            <NavLink to="/books">Books</NavLink>
                        </li>

                        <li className={classes.li}>
                            <NavLink to="/about">About Me</NavLink>
                        </li>
                        
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Navbar;