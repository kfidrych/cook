import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = (prop) =>
  <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container-fluid">
            <div className="navbar-header">
            <p id="logo" className={window.location.pathname === "/" ? "active" : ""}>
                <Link className="logo" to="/"><img className="logoImg img-responsive" src="assets/img/logo.png" alt="cook"/></Link>
            </p>
            </div>


        <div className="dropdown">
            <button className="dropbtn">Classes</button>
                <div class="dropdown-content">
                    <a className={window.location.pathname === "/alacarte" ? "active" : ""}>
                        <Link className="alacarteLink" to="/Alacarte">A la Carte</Link>
                    </a>
                    <a className={window.location.pathname === "/classpkgs" ? "active" : ""}>
                        <Link className="classpkgsLink" to="/ClassPkgs">Class Packages</Link>
                    </a>
             </div>

        </div>


            <div id="navbar" className="navbar-collapse collapse">
                <ul className="nav navbar-nav">
                    <li className={window.location.pathname === "/about" ? "active" : ""}>
                        <Link className="aboutLink" to="/About">About</Link>
                    </li>
                  
                    <li className={window.location.pathname === "register" ? "active" : ""}>
                        <Link className="registerLink" to="/Register">Register</Link>
                    </li>
                    <li className={window.location.pathname === "login" ? "active" : ""}>
                        <Link className="loginLink" to="/Login">Login</Link>
                    </li>
                    <li className={window.location.pathname === "signin" ? "active" : ""}>
                        <Link className="signinLink" to="/SignIn">Sign In - Testing</Link>
                    </li>
                    <li className={window.location.pathname === "chatbot" ? "active" : ""}>
                        <Link className="ChatbotLink" to="/Chatbot">Chat With Us!</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

export default Nav;