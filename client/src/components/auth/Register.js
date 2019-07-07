import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import "./Auth.css";

class Register extends Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            username: "",
            email: "",
            password: "",
            password2: "",
            errors: {}
        };
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();
        const newUser = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        };
        console.log(newUser);
        API.saveUser({
            newUser
        })
        .then(res => res.json(newUser))
        .catch(err => console.log(err));
    };

    render() {
        const { errors } = this.state;
        return(
            <>
                <div className="welcome-message">
                    <h1>Welcome to <span className="logo-font">xylo</span>.</h1>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col s8 offset-s2">
                            <Link to="/" className="btn-flat waves-effect"><i className="material-icons left">keyboard_backspace</i>Home</Link>
                            <div className="col s12">
                            <h4><b>Sign up </b>here.</h4>
                                <p className="grey-text text-darken-1">
                                    Already have an account? <Link to="/login">Log in.</Link>
                                </p>
                            </div>
                            <form noValidate onSubmit={this.onSubmit}>
                                <div className="input-field col s12">
                                    <input
                                        onChange={this.onChange}
                                        value={this.state.firstName}
                                        error={errors.firstName}
                                        id="firstName"
                                        type="text"
                                    />
                                    <label htmlFor="firstName">First name</label>
                                </div>
                                <div className="input-field col s12">
                                    <input
                                        onChange={this.onChange}
                                        value={this.state.lastName}
                                        error={errors.lastName}
                                        id="lastName"
                                        type="text"
                                    />
                                    <label htmlFor="lastName">Last name</label>
                                </div>
                                <div className="input-field col s12">
                                    <input
                                        onChange={this.onChange}
                                        value={this.state.username}
                                        error={errors.username}
                                        id="username"
                                        type="text"
                                    />
                                    <label htmlFor="username">Username</label>
                                </div>
                                <div className="input-field col s12">
                                    <input
                                        onChange={this.onChange}
                                        value={this.state.email}
                                        error={errors.email}
                                        id="email"
                                        type="email"
                                    />
                                    <label htmlFor="email">Email</label>
                                </div>
                                <div className="input-field col s12">
                                    <input
                                        onChange={this.onChange}
                                        value={this.state.password}
                                        error={errors.password}
                                        id="password"
                                        type="password"
                                    />
                                    <label htmlFor="password">Password</label>
                                </div>
                                <div className="input-field col s12">
                                    <input
                                        onChange={this.onChange}
                                        value={this.state.password2}
                                        error={errors.password2}
                                        id="password2"
                                        type="password"
                                    />
                                    <label htmlFor="password2">Confirm Password</label>
                                </div>
                                <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                                    <button
                                        type="submit"
                                        className="btn btn-large waves-effect waves-light hoverable black white-text accent-3"
                                        >
                                        Sign up
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Register;
