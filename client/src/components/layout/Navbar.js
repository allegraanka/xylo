import React from "react";
import { Link } from "react-router-dom";
import "./Layout.css";

function Navbar(props) {
    console.log(props);
    return (
        <div className="navbar-fixed navbar">
            <nav className="z-depth-0">
                <div className="nav-wrapper white">
                    <div className="container">
                        <Link
                            to="/"
                            className="col s5 brand-logo left black-text">
                            <code>xylo</code>
                        </Link>
                        {props.isLoggedIn ? (
                            <div className="col right s12">
                                <button
                                    style={{
                                        width: "125px",
                                        borderRadius: "3px",
                                        letterSpacing: "1.5px"
                                    }}
                                    onClick={props.onLogoutClick}
                                    className="btn logout-btn waves-effect waves-light hoverable accent-3"
                                >
                                    logout
                            </button>
                            </div>
                            ) : (
                                <ul className="col s5 right black-text">
                                    <li>
                                        <Link
                                            to="/about"
                                            className="col s5 black-text">
                                            about
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/login"
                                            className="col s5 black-text">
                                            log in
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/register"
                                            className="col s5 black-text">
                                            sign up
                                        </Link>
                                    </li>
                                </ul>
                            )} 
                    </div> 
                </div>
            </nav>
        </div>
    );
}

export default Navbar;