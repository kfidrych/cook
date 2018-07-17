import React, { Component } from "react";
import { Row, Container } from "../../components/Grid";

class About extends Component {
  render() {
    return (
      <div>
                <Container fluid>
                    <Row>
                    <div className="col-md-12 containerBox inputBox">
                        <div className="col-lg-3">
                            <h1>Mister Chef</h1>
                        </div>
                        <div className="col-lg-8 ">
                            <p className="aboutText">
                            About the Chef: Chef Pat Boyer attended the Culinary Institute of America after attending a culinary arts program in high school. Since his education, he has worked in high quality kitchens throughout the Philadelphia area. These include several restaurants for celebrity chef and entrepreneur, Marc Vetri, and most notably his flagship restaurant, Vetri Cucina, which is considered by many to be one of the top three Italian restaurants in the country.
                            </p>
                        </div>
                    </div>
                    </Row>
                    <Row>
                    
                    </Row>
                </Container>
            </div>
    )
  }
}

export default About;