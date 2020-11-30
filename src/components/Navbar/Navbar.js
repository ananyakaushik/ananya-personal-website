import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
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
                        {/* <li className={classes.li}>About Me</li>
                        <li className={classes.li}>About Me</li> */}
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Navbar;