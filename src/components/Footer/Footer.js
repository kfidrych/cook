import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => (

  <footer className="footer">
        <div className="container">
         <p className={window.location.pathname === "contact" ? "active" : ""}>

                        <Link className="contactLink" to="/Contact">Contact Us</Link>
                        <Link className="adminLink" to="/Admin">Administrator</Link>
                    </p>
            <span>© 2018 A Few Hungry People</span>
        </div>
    </footer>
);

export default Footer;