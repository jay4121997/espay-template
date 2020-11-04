import React, { Component } from 'react';
import {
    Container, Col, Form, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText,
    FormGroup, Label, Input,
    Button,Row
  } from 'reactstrap';
  import Espay from "../images/Espay.png";

export default class Header extends Component {
    render() {
      return (
            <div>   
                <Row className="main-navbar">
                    <Col md="3" className="logo-main">
                        <img src={Espay} height="50px" ></img>
                    </Col>
                    <Col md="8">
                        <ul className="menu">
                            <li className="inneermenu">Home</li>
                            <li className="inneermenu">About Us</li>
                            <li className="inneermenu">Services</li>
                            <li className="inneermenu">Contact Us</li>
                        </ul>
                    </Col>
                </Row>
            </div>
        );
    }
}

