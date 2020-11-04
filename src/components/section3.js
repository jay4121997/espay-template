import React, { Component } from 'react';
import {
    Container, Col, Form, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText,
    FormGroup, Label, Input,
    Button,Row
  } from 'reactstrap';
  import xyz from "../images/xyz.png";

export default class Section3 extends Component {
    render() {
      return (
            <div>
            <Container>
         <Row>

          <Col xs="12">
            <h1 className="main-heading3">What Are The Unique Features Of Espay Exchange Software?</h1>
            <p className="inner-heading-tag2">
                Enable new paths to your desires regarding trading platform by getting allied with Espay. 
            </p>
          </Col>

          <Row className="featuremainrow">
            <Col md="4">
            <Card>
            <CardImg src={xyz} className="innermainicon" />
              <CardBody className="innerfeaturetopspace">
                <CardTitle className="innerfeaturetitle">Card title</CardTitle>
                <CardText className="innerfeaturetext">Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
              </CardBody>
            </Card>
            </Col>
            <Col md="4">
            <Card>
            <CardImg src={xyz} className="innermainicon" />
              <CardBody className="innerfeaturetopspace">
                <CardTitle className="innerfeaturetitle">Card title</CardTitle>
                <CardText className="innerfeaturetext">Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
              </CardBody>
            </Card>
            </Col>
            <Col md="4">
            <Card>
            <CardImg src={xyz} className="innermainicon" />
              <CardBody className="innerfeaturetopspace">
                <CardTitle className="innerfeaturetitle">Card title</CardTitle>
                <CardText className="innerfeaturetext">Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
              </CardBody>
            </Card>
            </Col>
          </Row>

          <Row className="featuremainrow">
            <Col md="4">
            <Card>
            <CardImg src={xyz} className="innermainicon" />
              <CardBody className="innerfeaturetopspace">
                <CardTitle className="innerfeaturetitle">Card title</CardTitle>
                <CardText className="innerfeaturetext">Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
              </CardBody>
            </Card>
            </Col>
            <Col md="4">
            <Card>
            <CardImg src={xyz} className="innermainicon" />
              <CardBody className="innerfeaturetopspace">
                <CardTitle className="innerfeaturetitle">Card title</CardTitle>
                <CardText className="innerfeaturetext">Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
              </CardBody>
            </Card>
            </Col>
            <Col md="4">
            <Card>
            <CardImg src={xyz} className="innermainicon" />
              <CardBody className="innerfeaturetopspace">
                <CardTitle className="innerfeaturetitle">Card title</CardTitle>
                <CardText className="innerfeaturetext">Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
              </CardBody>
            </Card>
            </Col>
          </Row>

          <Row className="featuremainrow">
            <Col md="4">
            <Card>
            <CardImg src={xyz} className="innermainicon" />
              <CardBody className="innerfeaturetopspace">
                <CardTitle className="innerfeaturetitle">Card title</CardTitle>
                <CardText className="innerfeaturetext">Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
              </CardBody>
            </Card>
            </Col>
            <Col md="4">
            <Card>
            <CardImg src={xyz} className="innermainicon" />
              <CardBody className="innerfeaturetopspace">
                <CardTitle className="innerfeaturetitle">Card title</CardTitle>
                <CardText className="innerfeaturetext">Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
              </CardBody>
            </Card>
            </Col>
            <Col md="4">
            <Card>
            <CardImg src={xyz} className="innermainicon" />
              <CardBody className="innerfeaturetopspace">
                <CardTitle className="innerfeaturetitle">Card title</CardTitle>
                <CardText className="innerfeaturetext">Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
              </CardBody>
            </Card>
            </Col>
          </Row>
        </Row>
      </Container>
            </div>
        );
    }
}

