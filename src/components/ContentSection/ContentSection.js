import React, { Component } from 'react';
import classes from './ContentSection.module.css'

class ContentSection extends Component {
    render() {

        const className = [classes.section, classes[`${ this.props.bgColor }`]].join(' ');

        return (
            <div>
                <p className={className}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
        );
    }
}

export default ContentSection;