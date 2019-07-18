import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Layout.css";

class About extends Component {
    render() {
        return (
            <div className="container valign-wrapper">
                <div className="row">
                    <div className="col s12 left-align">
                        <h1 className="about-header">about <span className="xylo">xylo</span></h1>
                        <Link to="/" className="btn-flat waves-effect">
                            <i className="material-icons left">keyboard_backspace</i>
                            Home
                        </Link>
                        <p className="about-para">lorem ipsumipsumipsumipsumipsumipsumipsumipsumipsumipsumipsumipsumipsumipsumipsumipsumipsumipsum</p>
                        <p className="about-para">lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum</p>
                        <p className="about-para">lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;