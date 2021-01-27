import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import classes from './ContentSection.module.css';

import Navigation from '../Navbar/Navbar';

import ananyaSXSW from '../../ananyaSXSW.jpg';

// Component for the Home page
class ContentSection extends Component {
    render() {

        return (
            
            <div className={`${classes.contentsDiv} h-100`} h-100 >
                <Navigation />
                {/* Container for contents */}
                <Container  className="h-100" fluid >
                    <Row className="h-100" >

                        {/* 'Profile picture' of website */}
                        <Col className={classes.imgDiv} lg={5} md={5} >
                            <img className={classes.profile} src={ananyaSXSW} alt="Ananya Kaushik" />
                        </Col>

                        {/* Intro text */}
                        <Col className={classes.paraDiv} lg={7} md={7} >
                            <p className={classes.paraText}>
                                Hi! I'm Ananya Kaushik. This is my website, where I'm practicing my frontend skills, primarily React.js and some CSS.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default ContentSection;