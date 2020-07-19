import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Layout.css";

class Landing extends Component {
    render() {
        return (
            <>
            <div className="container valign-wrapper">
                <div className="row">
                    <div className="col s12 center-align">
                        <h4 className="landing-logo">welcome to <span className="xylo">xylo</span></h4>
                        <p className="flow-text subtext">the philly music you care about</p>
                        <br />
                        <div className="col s6">
                            <Link
                                to="/register"
                                style={{
                                    width: "125px",
                                    borderRadius: "3px",
                                    letterSpacing: "1.5px"
                                }}
                                className="btn waves-effect waves-light hoverable accent-3"
                                >
                                Sign up
                            </Link>
                        </div>
                        <div className="col s6">
                            <Link
                                to="/login"
                                style={{
                                    width: "125px",
                                    borderRadius: "3px",
                                    letterSpacing: "1.5px"
                                }}
                                className="btn waves-effect waves-light hoverable accent-3"
                                >
                                Sign in
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            </>
        );
    }
}

export default Landing;