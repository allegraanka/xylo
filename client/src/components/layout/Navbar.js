import React from "react";
import { Link } from "react-router-dom";
import { auth } from '../../firebase/firebase.utils';

import "./Layout.css";

function Navbar({ currentUser }) {
    return (
        <div className="navbar-fixed navbar">
            <nav className="z-depth-0">
                <div className="nav-wrapper white">
                    <div className="container">
                        <Link
                            to="/"
                            className="col s5 brand-logo left black-text">
                            <div>xylo</div>
                        </Link>
                        { currentUser ? (
                            <div className="col right s12">
                                <button
                                    style={{
                                        width: "125px",
                                        borderRadius: "3px",
                                        letterSpacing: "1.5px"
                                    }}
                                    onClick={() => auth.signOut()}
                                    className="btn logout-btn waves-effect waves-light hoverable accent-3"
                                >
                                    sign out
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
                                            sign in
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