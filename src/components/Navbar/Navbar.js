import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';

class Navbar extends Component {
    render() {
        return(
            <div>
                <nav className={classes.Nav}>
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