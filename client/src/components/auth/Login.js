import React, { Component } from "react";

import { signInWithGoogle } from '../../firebase/firebase.utils';

import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";

import "./Auth.css";

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            errors: {}
        };
    }

    componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
        this.props.history.push("/dashboard");
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
        this.props.history.push("/dashboard"); // push user to dashboard when they login
        }

        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
            }
        }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();
        const userData = {
            email: this.state.email,
            password: this.state.password

        };
        this.props.loginUser(userData);
        console.log(userData);
    };

    render() {
        const { errors } = this.state;
        return (
            <>
                <div className="hello-again">
                    <h1>welcome back</h1>
                </div>
                <div className="container login-container">
                    <div style={{ marginTop: "3rem" }} className="row">
                        <div className="col s8 offset-s2">
                            <Link to="/" className="btn-flat waves-effect link-component">
                                <i className="material-icons left">keyboard_backspace</i>
                                Home
                            </Link>
                            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                                <h4 className="login-font">sign in</h4>
                                <p className="grey-text">
                                    Don't have an account? <Link to="/register" className="link-component">Sign up!</Link>
                                </p>
                            </div>
                            <form noValidate onSubmit={this.onSubmit}>
                                <div className="input-field col s12">
                                    <input
                                        onChange={this.onChange}
                                        value={this.state.email}
                                        error={errors.email}
                                        id="email"
                                        type="email"
                                        className={classnames("", {
                                            invalid: errors.email || errors.emailnotfound
                                        })}
                                    />
                                    <label htmlFor="email">Email</label>
                                    <span className="red-text">
                                        {errors.email}
                                        {errors.emailnotfound}
                                    </span>
                                </div>
                                <div className="input-field col s12">
                                    <input
                                        onChange={this.onChange}
                                        value={this.state.password}
                                        error={errors.password}
                                        id="password"
                                        type="password"
                                        className={classnames("", {
                                            invalid: errors.password || errors.passwordincorrect
                                        })}
                                    />
                                    <label htmlFor="password">Password</label>
                                    <span className="red-text">
                                        {errors.password}
                                        {errors.passwordincorrect}
                                    </span>
                                </div>
                                <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                                    <button
                                        style={{
                                            width: "125px",
                                            borderRadius: "3px",
                                            letterSpacing: "1.5px",
                                            marginTop: "1rem"
                                        }}
                                        type="submit"
                                        className="btn waves-effect waves-light hoverable transparent white-text accent-3"
                                    >
                                        Sign in
                                    </button>
                                    <button
                                        style={{
                                            width: "200px",
                                            borderRadius: "3px",
                                            letterSpacing: "1.5px",
                                            marginTop: "1rem"
                                        }}
                                        onClick={signInWithGoogle}
                                        className="btn waves-effect waves-light hoverable transparent white-text accent-3 google-sign-in"
                                    >
                                        Sign in w/ Google
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

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { loginUser })(Login);