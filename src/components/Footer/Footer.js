import React, { Component } from 'react';
import classes from './Footer.module.css';

class Footer extends Component {
    render () {
        return (<footer className={classes.Footer}><b>This is the footer component</b></footer>);
    }
}

export default Footer;