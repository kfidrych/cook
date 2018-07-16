import React from 'react';
import { Link } from 'react-router-dom';
import './AdminNav.css';

const AdminNav = () =>
  <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container-fluid">
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
                    <li className={window.location.pathname === "chatbot" ? "active" : ""}>
                        <Link className="ChatbotLink" to="/Chatbot">Speak with a Representative</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

export default AdminNav;