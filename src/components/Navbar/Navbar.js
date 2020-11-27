import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import classes from './Navbar.module.css';

import Books from '../Books/Books';
import About from '../About/About';
import ContentSection from '../ContentSection/ContentSection';

class Navbar extends Component {
    render() {
        return(
            <div>
                <nav className={classes.Nav}>
                    <ul className={classes.ul}>
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
                <Switch>
                    <Route path="/books" component={Books} />
                    <Route path="/about" component={About} />
                    {/* <Route path="/" exact component={ContentSection} /> */}
                    {/* <Route component={NoMatch}/> */}
                </Switch>
            </div>
        )
    }
}

export default Navbar;