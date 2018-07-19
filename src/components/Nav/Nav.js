import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../../constants/routes';
import AuthUserContext from '../Session/AuthUserContext';
import SignOutButton from '../SignOut';
import './Nav.css';

const Nav = () =>
  <AuthUserContext.Consumer>
    {authUser => authUser
      ? <NavigationAuth />
      : <NavigationNonAuth />
    }
  </AuthUserContext.Consumer>



const NavigationAuth = () =>
    <nav className="navbar navbar-inverse navbar-fixed-top sticky">
        <div className="container-fluid">
            {/* <div className="navbar-header">
                <p id="logo" className={window.location.pathname === "/" ? "active" : ""}>
                    <Link className="logo" to="/"><img className="logoImg img-responsive" src="assets/img/logo.png" alt="cook"/></Link>
                </p>
            </div> */}

            <div id="navbar" className="navbar-collapse collapse">
            
                <ul className="nav navbar-nav">
                    <p id="logo" className={window.location.pathname === "/" ? "active" : ""}>
                        <Link className="logo" to="/"><img className="logoImg img-responsive" src="assets/img/logo.png" alt="cook"/></Link>
                    </p>
                    <li className={window.location.pathname === "/home" ? "active" : ""}>
                        <Link className="navButton userProfileLink" to="/UserProfile">Home</Link>
                    </li>
                    <li className={window.location.pathname === "/about" ? "active" : ""}>
                        <Link className="navButton about" to="/About">About</Link>
                    </li>
                    <li className={window.location.pathname === "/contact" ? "active" : ""}>
                        <Link className="navButton chatbotLink" to="/Contact">Chat With Us!</Link>
                    </li>
                    <li><SignOutButton /></li>
                </ul>
            </div>
        </div>
    </nav>

const NavigationNonAuth = () =>
  <nav className="navbar navbar-inverse navbar-fixed-top sticky">
<div className="container-fluid">
    <div className="navbar-header">
    <p id="logo" className={window.location.pathname === "/" ? "active" : ""}>
        <Link className="logo" to="/"><img className="logoImg img-responsive" src="assets/img/logo.png" alt="cook"/></Link>
    </p>
    </div>

    <div id="navbar" className="navbar-collapse collapse">
        <ul className="nav navbar-nav">
            <li className={window.location.pathname === "/about" ? "active" : ""}>
                <Link className="aboutLink" to="/About">About</Link>
            </li>
          
            <li className={window.location.pathname === "register" ? "active" : ""}>
                <Link className="registerLink" to={routes.SIGN_UP}>Register</Link>
            </li>
            <li className={window.location.pathname === "login" ? "active" : ""}>
                <Link className="loginLink" to={routes.SIGN_IN}>Login</Link>
            </li>
            <li className={window.location.pathname === "chatbot" ? "active" : ""}>
                <Link className="ChatbotLink" to="/Chatbot">Chat With Us!</Link>
            </li>
        </ul>
    </div>
</div>
</nav>

export default Nav;