import React, { Component } from "react";
import { Row, Container } from "../../components/Grid";
import "./About.css";

class About extends Component {
  render() {
    return (
      <div>
                <Container fluid>
                    <Row>
                    <div className="col-md-12 containerBox inputBox">
                        <div className="col-lg-3">
                            <h1>Why use Cooky?</h1>
                        </div>
                        <div className="col-lg-8 ">
                            <p className="aboutText">
                            Cooky allows for aspiring and amateur chef's and cooks to find, purchase, and schedule cooking classes with an experienced Professional Chef from the comfort of your own home!
                            </p>
                            <p className="aboutText">
                            It's easy to sign up and start learning how to prepare some of your favorite dishes and cuisines! After completing a survey about your experience, interests, and materials available the Chef is then able to best customize each course to your specific needs.
                            </p>
                        </div>
                        <div className="col-lg-3">
                            <h1>Meet the Chef!</h1>
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