import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
            <div className="navbar-fixed">
                <nav className="z-depth-0">
                    <div className="nav-wrapper white">
                        <Link
                            to="/"
                            className="col s5 brand-logo left black-text">
                            <code>xylo</code>
                        </Link>
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
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;