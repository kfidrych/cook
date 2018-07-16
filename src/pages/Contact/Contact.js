import React, { Component } from "react";
import { Row, Container } from "../../components/Grid";
import { LogText, UserInput } from "../../components/UserLog";
import "./Contact.css";

class Contact extends Component {
// Setes component's initial state.
state = {
    name: "",
    email: "",
    comment: ""
};

// Updates component state when user types into input field.
handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
        [name]: value
    });
};

    render() {
        return (
            <div>
                <Container>
                    <Row>
                    <div className="col-sm-5 contactLeft">
                        <h2>Contact Us</h2>
                        <hr />
                        <h4><span><i className="fa  fa-map-marker fa-1x contactIcon" aria-hidden="true"></i></span> Philadelphia, PA </h4>
                        <h4><span><i className="fa  fa-envelope fa-1x contactIcon" aria-hidden="true"></i></span> misterchef@mail.com</h4>
                        <h4><span><i className="fa  fa-volume-control-phone fa-1x contactIcon" aria-hidden="true"></i></span> 215-555-COOK</h4>
                    </div>
                    <div className="col-sm-7 contactRight">
                        <div className="row">
                            <div className="col-sm-6">

                                <UserInput
                                    name="name"
                                    placeholder="Name"
                                />
                            </div>
                            <div className="col-sm-6">

                                <UserInput
                                    name="email"
                                    placeholder="Email"
                                />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-12">

                                <LogText
                                    name="comment"
                                    placeholder="Comment"
                                />
                            </div>
                        </div>

                        <button className="btn btn-warning contactBtn">Send</button>
                        </div>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Contact;