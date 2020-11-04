import React, { Component } from 'react';
import {
    Container, Col, Form, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText,
    FormGroup, Label, Input,
    Button,Row
  } from 'reactstrap';
import icon1 from "../images/icon1.png";
import icon2 from "../images/icon2.png";
import icon3 from "../images/icon3.png";

export default class Section2 extends Component {
    render() {
      return (
            <div>
               <Container>
         <Row>

          <Col xs="12">
              <h1 className="main-heading3">Our Exchange Software Development Comprise Of</h1>
              <p className="inner-heading-tag2">
                Enable new paths to your desires regarding trading platform by getting allied with Espay.
            </p>

          <Row className="featuremainrow">
            <Col md="4">
            <Card className="main-card">
            <CardImg src={icon1} className="mainicon" />
              <CardBody>
                <CardTitle className="featuretitle">Card title</CardTitle>
                <CardText className="featuretext">Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
              </CardBody>
            </Card>
            </Col>
            <Col md="4">
            <Card className="main-card">
            <CardImg src={icon2} className="mainicon" />
              <CardBody>
                <CardTitle className="featuretitle">Card title</CardTitle>
                <CardText className="featuretext">Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
              </CardBody>
            </Card>
            </Col>
            <Col md="4">
            <Card className="main-card">
            <CardImg src={icon3} className="mainicon" />
              <CardBody>
                <CardTitle className="featuretitle">Card title</CardTitle>
                <CardText className="featuretext">Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
              </CardBody>
            </Card>
            </Col>
          </Row>
          </Col>
        </Row>
      </Container>
            </div>
        );
    }
}

