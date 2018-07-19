import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter,
  Switch
} from 'react-router-dom'
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
import LandingPage from '../../components/Landing';
import SignUpPage from '../../components/SignUp';
import SignInPage from '../../components/SignIn';
import PasswordForgetPage from '../../components/PasswordForget';
import HomePage from '../../components/Home';
import AccountPage from '../../components/Account';
import ClassManager from '../../components/ClassManager';
import AppointmentsManager from '../../components/AppointmentsManager';
import UserManager from "../../components/UserManager";
import SignUpSurvey from '../../components/SignUpSurvey';
import withAuthentication from '../../components/Session/withAuthentication';
import * as routes from '../../constants/routes';
import './index.css';
import { auth, db } from '../../firebase';

const user = auth.currentUser;
console.log(user.role);
// // const authorized = auth.onAuthStateChanged(user);

// const checkAuth = {
//   isAuthenticated: false,
//   isAdmin: false,
//   authenticate(cb) {
//     if (user) {
//       this.isAuthenticated = true;
//       if (user.role == 'admin') {
//         this.isAdmin = true;
//       }
//     }
//   },
//   signout(cb) {
//     this.isAuthenticated = false;
//     this.isAdmin = false;
//   }
// }

// const Public = () => <h3>Public</h3>;
// const Protected = () => <h3>Protected</h3>;

// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route {...rest} render={(props) => (
//     checkAuth.isAuthenticated === true
//       ? <Component {...props} />
//       : <Redirect to='/SignIn' component={SignInPage} />
//   )} />
// )

// class isLoggedIn extends Component {
//   state = {
//     redirectToReferrer: false
//   }
//   isLoggedIn = () => {
//     checkAuth.authenticate(() => {
//       this.setState(() => ({
//         redirectToReferrer: true
//       }))
//     })
//   }
//   render() {
//     const {redirectToReferrer} = this.state;
//     if (redirectToReferrer === true) {
//       return (
//         <Redirect to="/admin/AppointmentManager" />
//       )
//     }
//     return(
//       <div>
//         <p>You  must log in to view this page</p>
//         <button onClick={this.isLoggedIn}>Log In</button>
//       </div>
//     )
//   }
// }

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: null,
    };
  }
  render() {
    return (
      <Router>
        {/* <div>
          <ul>
            <li><Link to="/admin/ClassManager">Public Page</Link></li>
            <li><Link to="/admin/AppointmentManager">Protected Page</Link></li>
          </ul>

          <Route path="/admin/ClassManager" component={ClassManager} />
          <Route path="/SignIn" component={SignInPage} />
          <PrivateRoute path="/admin/AppointmentManager" component={Protected} />
        </div> */}


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
              <Route exact path="/admin/Admin" component = {Admin} />
              <Route exact path="/admin/ClassManager" component = {ClassManager} />
              <Route exact path="/admin/AppointmentManager" component = {AppointmentsManager} />
              <Route exact path="/SignUpSurvey" component = {SignUpSurvey} />
              <Route exact path="/admin/UserManager" component = {UserManager} />
              <Route exact path={routes.LANDING} component={() => <LandingPage />} />
              <Route exact path={routes.SIGN_UP} component={() => <SignUpPage />} />
              <Route exact path={routes.SIGN_IN} component={() => <SignInPage />} />
              <Route exact path={routes.PASSWORD_FORGET} component={() => <PasswordForgetPage />} />
              <Route exact path={routes.HOME} component={() => <HomePage />} />
              <Route exact path={routes.ACCOUNT} component={() => <AccountPage />} />
              <Route exact path={routes.CLASSMANAGER} component={() => <ClassManager />} />
              <Route exact path={routes.APPOINTMENTMANAGER} component={() => <AppointmentsManager />} />
              <Route component={Home} />
            </Switch>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default withAuthentication(App);