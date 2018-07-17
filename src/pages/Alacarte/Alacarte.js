import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid";
import MenuCard from "../../components/MenuCard";
import { db } from '../../firebase';
import "./Alacarte.css"

class Alacarte extends Component {
  constructor(props) {
    super(props);

    this.state = {
      classes: {}
    };
  }

  componentDidMount() {
    db.onceGetClasses().then(snapshot =>
      this.setState(() => ({ classes: snapshot.val() }))
    );
  }

  render() {
    const { classes } = this.state;
    return (
      <Container fluid>
            <Row>
                <Jumbotron />
            </Row>
            <Row>
                <Col size="md-12">
                    <div className="col-sm-12 selectClass">
                        <h2>Choose From Our Menu of Individual Classes</h2>
                        <hr className="line" />
                    </div>
                </Col>
            </Row>
    { !!classes && <ProductList list={classes} /> }
        </Container>
    )
  }
};

const ProductList = ({ classes }) =>
  <Row>
     {Object.keys(classes).map(key =>
    <MenuCard title={key.title} description={key.description} price={key.price}/>
     )}
    </Row>


export default Alacarte;