import React, { Component } from 'react';
import classes from './ContentSection.module.css';
import ananyaSXSW from '../../ananyaSXSW.jpg';

class ContentSection extends Component {
    render() {

        const className = [classes.section, classes[`${ this.props.bgColor }`]].join(' ');

        return (
            <div style={{display: 'inline-block', height: '100%', alignContent: 'center', justifyContent:'center'}}>
                <div className={classes.imgDiv}>
                    <img src={ananyaSXSW} alt="Ananya" />
                </div>
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