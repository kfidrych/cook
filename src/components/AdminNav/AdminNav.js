import React from 'react';
import { Link } from 'react-router-dom';
import './AdminNav.css';
import UserManager from "../../components/UserManager";

const AdminNav = (props) =>
    <div>
    <nav className="navbar navbar-inverse navbar-fixed-top">
            <div className="container-fluid">
                <div id="navbar" className="navbar-collapse collapse">
                    <ul className="nav navbar-nav">
                        <li className={window.location.pathname === "/userManager" ? "active" : ""} >
                            <Link className="userManagerLink" to="/admin/UserManager">User Manager</Link>
                        </li>
                        <li className={window.location.pathname === "manageAppointments" ? "active" : ""}>
                            <Link className="manageAppointmentsLink" to="/admin/AppointmentManager">Appointments Manager</Link>
                        </li>
                        <li className={window.location.pathname === "manageClasses" ? "active" : ""}>
                            <Link className="manageClassesLink" to="/admin/ClassManager">Class Manager</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>

export default AdminNav;