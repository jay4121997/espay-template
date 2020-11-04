import React, { Component } from 'react';
import {
    Container, Col, Form, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText,
    FormGroup, Label, Input,
    Button,Row
  } from 'reactstrap';
  import ABC from "../images/abc.png";

  export default class Banner extends Component {
    render() {
      return (
            <div>
                <Container>
            <Row>
                <Col xs="6">
                    <h1 className="main-heading">Exchange Development For Entrepreneur & Financial Institution</h1>
                    <p className="inner-heading-tag">One-stop solution for your exchange software development needs</p>
                    <Button className="heading-button">Talk to Our Expert</Button>
                </Col>
                
                <Col xs="6">
                    <img src={ABC} height="350px" width="500px" className="img-heading"></img>
                </Col>

                </Row>
            </Container>
               
            </div>
        );
    }
}

