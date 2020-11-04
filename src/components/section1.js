import React, { Component } from 'react';
import {
    Container, Col, Form, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText,
    FormGroup, Label, Input,
    Button,Row
  } from 'reactstrap';
  import dashbord from "../images/dashbord.png";

export default class Section1 extends Component {
    render() {
      return (
            <div>
                
                <Container>
                    <Row>

                    <Col xs="6">
                        <h1 className="main-heading2">Our Exchange Solution Overview</h1>
                        <p className="inner-heading-tag2">
                            Enable new paths to your desires regarding trading platform by getting allied with Espay – Well distinguished Exchange Development Company.
                            We develop trading platforms which are cost-effective with the help of project-focused certified professionals. Espay is standing separately as a customized exchange solution provider because of its 10+ years of experience in transaction processing. Our groundbreaking methodologies offers industry’s best experience to the clients and add value to every project we commences. We work with our regarded customers to transform their digital needs into probably the most effective and high performance exchange software.
                        </p>

                    </Col>
                    
                    <Col xs="6">
                        <img src={dashbord} height="350px" width="500px" className="img-heading"></img>
                    </Col>

                    </Row>
                </Container>
            </div>
        );
    }
}

