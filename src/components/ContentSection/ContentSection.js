import React, { Component } from 'react';
import classes from './ContentSection.module.css';

import Navigation from '../Navbar/Navbar';

import ananyaSXSW from '../../ananyaSXSW.jpg';

// Component for the Home page
class ContentSection extends Component {
    render() {
        // adds background color based on received props
        const className = [classes.section, classes[`${ this.props.bgColor }`]].join(' ');

        return (
            
            <div style={{zIndex: 10, display: 'inline-block', height: '100%', alignContent: 'center', justifyContent:'center'}}>
                <Navigation />
                {/* 'Profile pictue' of website */}
                <div className={classes.imgDiv}>
                    <img className={classes.sxsw} src={ananyaSXSW} alt="Ananya" />
                </div>
                
                {/* Website purpose div for home page */}
                <div className={classes.pDiv}>
                    
                    <p className={className}>
                        Hi! I'm Ananya Kaushik. This is my website, where I'm practicing my frontend skills, primarily React.js and some CSS.
                    </p>
                </div>
            </div>
        );
    }
}

export default ContentSection;