import React, { Component } from "react";
import { Row, Container } from "../../components/Grid";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AdminNav from "../../components/AdminNav";
import AdminSchedule from "../AdminSchedule";
import UpcomingClasses from "../UpcomingClasses";
import EditContent from "../EditContent";

class Admin extends Component {
  render() {
    return (
      <div>
             <AdminNav /> 
             <Switch>
  <Route exact path="/AdminSchedule" component={AdminSchedule} />
  <Route exact path="/UpcomingClasses" component={UpcomingClasses} />
  <Route exact path="/EditContent" component={EditContent} />
  </Switch>
  </div>
    )
  }
}

export default Admin;