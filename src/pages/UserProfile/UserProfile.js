import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import UserNav from "../../components/UserNav";
import SlideshowUser from "../../components/SlideshowUser";
import UpcomingClasses from "../UpcomingClasses";
import withAuthorization from '../../components/Session/withAuthorization';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { firebase, db } from '../../firebase';

class UserProfile extends Component {

  onClick = (event) => {
    const {
      username,
      email,
      passwordOne,
    } = this.state;
  }

  render() {
    return (
      <div>
        <UserNav /> 
        <SlideshowUser />
        <Switch>
          <Route exact path="/UpcomingClasses" component={UpcomingClasses} />
        </Switch>
      </div>
    )
  }
}

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(UserProfile);