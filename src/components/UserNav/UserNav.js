import React from 'react';
import { Link } from 'react-router-dom';
import './UserNav.css';

const UserNav = () =>
  <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container-fluid">
            <div id="navbar" className="navbar-collapse collapse">
                <ul className="nav navbar-nav">
                    <li className={window.location.pathname === "/about" ? "active" : ""}>
                        <Link className="UpcomingClasses" to="/UpcomingClasses">Upcoming Classes</Link>
                    </li>
                    <li className={window.location.pathname === "register" ? "active" : ""}>
                        <Link className="registerLink" to="/Register">Register</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

export default UserNav;