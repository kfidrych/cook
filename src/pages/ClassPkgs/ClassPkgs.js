import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import ProductList from "../../components/ProductList";
import "./ClassPkgs.css"

class ClassPkgs extends Component {
  render() {
    const options = [{ title: "Monthly", description: "The best ever!" }, { title: "Weekly", description: "Really good!" }, { title: "Ten Class Package", description: "Oh man!" }];
    return (
      <Container fluid>
            <Row>
                <Jumbotron />
            </Row>
            <Row>
                <Col size="md-12">
                    <div className="col-sm-12 selectClass">
                        <h2>Choose From Our Selection of Packages</h2>
                        <hr className="line" />
                    </div>
                </Col>
            </Row>
            <ProductList list={options} /> 
            </Container>
    )
  }
}

export default ClassPkgs;
