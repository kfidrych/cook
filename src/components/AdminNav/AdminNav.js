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
                        <li>
                        {/* <li className={window.location.pathname === "/userManager" ? "active" : ""}> */}
                            User Manager
                            {/* <Link className="userManagerLink" to="/UserManager">User Manager</Link> */}
                            {/* {props.children} */}
                        </li>
                        <li className={window.location.pathname === "manageAppointments" ? "active" : ""}>
                            Class Manager
                            {/* <Link className="manageAppointmentsLink" to="/AppointmentManager">Appointments Manager</Link> */}
                            {/* {props.children} */}
                        </li>
                        <li className={window.location.pathname === "manageClasses" ? "active" : ""}>
                            Appointments Manager
                            {/* <Link className="manageClassesLink" to="/ClassManager">Class Manager</Link> */}
                            {/* {props.children} */}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        {props.children}
    </div>

export default AdminNav;