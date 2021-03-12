import React, { Component } from 'react';
import Navigation from '../Navbar/Navbar';
import {Container, Row, Col} from 'react-bootstrap';

// Component for the Work Experience page
class Career extends Component {
    render() {
        return(
            <div>
                <Navigation />
                <h2>Experience</h2>
                <Container  className="h-100" fluid >
                    {/* Work and college experience */}
                    <br /><br />
                    <Row className="h-100" >

                        <Col lg={4} >
                            <p>IBM</p>
                            <p><em>Data Scientist</em></p>
                            <p>2018-2020</p>
                        </Col>

                        <Col lg={8} >
                            <p >
                                I built Python Jupyter notebooks for customers to understand data analysis 
                                and model building techniques that can be used with IBM tools. These were used 
                                by the sales team to demonstrate the performance of IBM's model deployment tools 
                                (Watson Machine Learning) and platforms (ex. Cloud Pak for Data) and promote sales.
                                I collaborated with product management, the development teams, and the documentation 
                                team to generate thorough and accurate notebooks.
                            </p>
                        </Col>
                    </Row>
                    <br /><br />
                    <Row className="h-100" >

                        <Col lg={4} >
                            <p>IBM</p>
                            <p><em>Software Developer Intern</em></p>
                            <p>2017</p>
                        </Col>

                        <Col lg={8} >
                            <p >
                                I worked with my team to develop a package manager to automatically and autonomously 
                                update 3rd party packages of Watson Data Platform Microservices to prevent security 
                                issues using Node.js, Express, Bluemix, and Jenkins.
                            </p>
                        </Col>
                    </Row>

                    <Row className="h-100" >

                        <Col lg={4} >
                            <p>The University of Texas at Austin</p>
                            <p><em>BS in Mathematics: Probability, Statistics, and Data Analysis</em></p>
                            <p><em>Certificate in Computer Science</em></p>
                            <p>2014-2018</p>
                        </Col>

                        <Col lg={8} >
                            <p >
                                A year into my time at college, I decided to take up math as my major, following
                                an entire lifetime of being drawn to logical thought patterns and problem-solving. 
                                A year into college, I also discovered coding and how much I loved it with my first programming course.
                                This led me to pursue the Certificate program in Computer Science that my university offered
                                along with my major.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Career;