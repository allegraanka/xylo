import React from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
    console.log(props);
    return (
        <div className="navbar-fixed">
            <nav className="z-depth-0">
                <div className="nav-wrapper white">
                    <Link
                        to="/"
                        className="col s5 brand-logo left black-text">
                        <code>xylo</code>
                    </Link>
                </div>
                {props.isLoggedIn ? (
                    <div className="col right s12">
                        <button
                            style={{
                                width: "125px",
                                borderRadius: "3px",
                                letterSpacing: "1.5px",
                                marginTop: "1rem"
                            }}
                            onClick={props.onLogoutClick}
                            className="btn waves-effect waves-light hoverable black white-text accent-3"
                        >
                            Logout
                        </button>
                    </div>
                ) : (
                    <ul className="col s5 right black-text">
                        <li>
                            <Link
                                to="/about"
                                className="col s5 black-text">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/login"
                                className="col s5 black-text">
                                Log in
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/register"
                                className="col s5 black-text">
                                Sign up
                            </Link>
                        </li>
                    </ul>
                )}  
            </nav>
        </div>
    );
}

export default Navbar;