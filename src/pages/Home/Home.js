import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid";
import Chatbot from "../../components/Chatbot";
import "./Home.css"

class Home extends Component {
  // Sets component's initial state
  state = {

  };

  render() {
    return (
      <Container fluid>
                <Row>
                    <Jumbotron />
                </Row>
                <Row>
                    <Col size="md-12">
                    <div className="col-sm-12 getStarted">
                    <h2>Browse Cooking Classes</h2>
                                <hr className="line" />
                                <div className="col-sm-4">
                                    <a href="/Alacarte"><button className="btn btn-primary btn-lg alacarteBtn">A la carte</button></a>
                                </div>
                                <div className="col-sm-4">
                                    <a href="/Classpkgs"><button className="btn btn-primary btn-lg classpkgsBtn">Packages</button></a>
                                </div>
                            </div>
                    </Col>
                </Row>
            </Container>
    )
  }
}

export default Home;