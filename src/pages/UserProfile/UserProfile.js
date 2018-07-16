import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import UserCard from "../../components/UserCard";
import { UserInput } from "../../components/UserLog";

class UserProfile extends Component {
  render() {
    return (
      <div>
          <Container fluid>
            <Row>
              <Col className="profile" size="md-4">
                <form>
                    <div>
                      <UserCard />
                      <input className="fileInput" type="file"
                          onChange={this._handleImageChange} />
                    </div>
                </form>
              </Col>
              <Col size="md-8">
                <div>
                  <p>Item Name</p>
                  <UserInput
                      name="itemName"
                      placeholder="Add course"
                  />
                  <p>Item Summary</p>
                  <UserInput
                      name="itemSummary"
                      placeholder="Short summary of the course"
                  />
                  </div>
              </Col>
            </Row>
            <Row>
              <Col size="md-12">
  
              </Col>
            </Row>
          </Container>
    </div>
    )
  }
}

export default UserProfile;