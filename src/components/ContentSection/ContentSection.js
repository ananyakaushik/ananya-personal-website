import React, { Component } from 'react';
import classes from './ContentSection.module.css';

import Navbar from '../Navbar/Navbar';

import ananyaSXSW from '../../ananyaSXSW.jpg';

class ContentSection extends Component {
    render() {

        const className = [classes.section, classes[`${ this.props.bgColor }`]].join(' ');

        return (
            // <div style={{position: 'relative'}}>
                // <Navbar />
                <div style={{zIndex: 10, display: 'inline-block', height: '100%', alignContent: 'center', justifyContent:'center'}}>
                    
                    <div className={classes.imgDiv}>
                        <img src={ananyaSXSW} alt="Ananya" />
                    </div>
                    <div className={classes.pDiv}>
                        <Navbar />
                        <p className={className}>
                            Hi! I'm Ananya Kaushik. This is my website, where I'm practicing my frontend skills, primarily React.js and some CSS.
                        </p>
                    </div>
                </div>
            // </div>
        );
    }
}

export default ContentSection;