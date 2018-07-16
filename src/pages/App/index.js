import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import logo from './logo.svg';
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Home from "../Home";
import About from "../About";
import Login from "../Login";
import Alacarte from "../Alacarte";
import ClassPkgs from "../ClassPkgs";
import Contact from "../Contact";
import Chatbot from "../Chatbot";
import UserProfile from "../UserProfile";
import Admin from "../Admin";
import Navigation from '../../components/Navigation';
import LandingPage from '../../components/Landing';
import SignUpPage from '../../components/SignUp';
import SignInPage from '../../components/SignIn';
import PasswordForgetPage from '../../components/PasswordForget';
import HomePage from '../../components/Home';
import AccountPage from '../../components/Account';
import withAuthentication from '../../components/Session/withAuthentication';
import * as routes from '../../constants/routes';
import './index.css';

class App extends Component {
  render() {
    return (
      <Router>
  <div>
    <Nav />
<Switch>
  <Route exact path="/" component={Home} />
  <Route exact path="/About" component={About} />
  <Route exact path="/Contact" component={Contact} />
  <Route exact path="/Login" component={Login} />
  <Route exact path="/Alacarte" component={Alacarte} />
  <Route exact path="/ClassPkgs" component={ClassPkgs} />
  <Route exact path="/Chatbot" component = {Chatbot} />
  <Route exact path="/UserProfile" component = {UserProfile} />
  <Route exact path="/Admin" component = {Admin} />
  <Route exact path={routes.LANDING} component={() => <LandingPage />} />
  <Route exact path={routes.SIGN_UP} component={() => <SignUpPage />} />
  <Route exact path={routes.SIGN_IN} component={() => <SignInPage />} />
  <Route exact path={routes.PASSWORD_FORGET} component={() => <PasswordForgetPage />} />
  <Route exact path={routes.HOME} component={() => <HomePage />} />
  <Route exact path={routes.ACCOUNT} component={() => <AccountPage />} />
  <Route component={Home} />
</Switch>
<Footer />
  </div>
  </Router>
    )
  }
}

export default withAuthentication(App);