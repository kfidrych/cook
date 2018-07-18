import React, { Component } from "react";
import { Row, Container } from "../../components/Grid";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AdminNav from "../../components/AdminNav";
import UserManager from "../../components/UserManager";
import ClassManager from "../../components/ClassManager";
import AppointmentsManager from "../../components/AppointmentsManager";
import withAuthorization from '../../components/Session/withAuthorization';

class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      renderedChild: ""
    };
  }

  render() {
    return (
      <div>
        <AdminNav >
          <UserManager />
          <ClassManager />
          <AppointmentsManager />
        </AdminNav> 
      </div>
    )
  }
}

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(Admin);