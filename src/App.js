import React, { Component } from 'react';
import {Container} from 'reactstrap';
import Header  from "./components/header";
import Banner  from "./components/banner";
import Section1  from "./components/section1";
import Section2  from "./components/section2";
import Section3  from "./components/section3";

class App extends Component {
  render() {
    return (
    
      <Container fluid={true}>
        <Header />

      <Container fluid={true} className="main-first-section">
        <Banner/>
      </Container>

      <Container fluid={true} className="main-secound-section">
        <Section1/>
      </Container>

      <Container fluid={true} className="main-third-section">
        <Section2/>
      </Container>

      <Container fluid={true} className="main-fourth-section">
        <Section3/>
      </Container>

      </Container>
      
    );
  }
}

export default App;