import React, { Component } from 'react';
import classes from './Header.module.css';

class Header extends Component {
    render () {
        return (
            <div className={classes.Header}>
                <header className={classes.title}>
                    Ananya Kaushik
                </header>
            </div>);
    }
}

export default Header;
