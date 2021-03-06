import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";
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

    componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
        this.props.history.push("/dashboard");
        }
    }

    componentWillReceiveProps(nextProps) {
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
        const newUser = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        };

        // this.props.registerUser(newUser, this.props.history); 

        API.saveUser(newUser)
        .then(res => {
            console.log(`New user from register.js: ${newUser}`);
            // this.props.history.push("/login");
        })
        .catch(err => console.log(err));
    };

    render() {
        const { errors } = this.state;
        return(
            <>
                <div className="welcome-message">
                    <h1>welcome to xylo</h1>
                </div>
                <div className="container reg-container">
                    <div style={{ marginTop: "3rem" }} className="row">
                        <div className="col s8 offset-s2">
                            <Link to="/" className="btn-flat waves-effect link-component"><i className="material-icons left">keyboard_backspace</i>Home</Link>
                            <div className="col s12">
                            <h4 className="signin-font">create an account</h4>
                                <p className="grey-text">
                                    Already have an account? <Link to="/login" className="link-component">Sign in</Link>
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
                                        className={classnames("", {
                                            invalid: errors.firstName
                                        })}
                                    />
                                    <label htmlFor="firstName">First name</label>
                                    <span className="red-text">{errors.firstName}</span>
                                </div>
                                <div className="input-field col s12">
                                    <input
                                        onChange={this.onChange}
                                        value={this.state.lastName}
                                        error={errors.lastName}
                                        id="lastName"
                                        type="text"
                                        className={classnames("", {
                                            invalid: errors.lastName
                                        })}
                                    />
                                    <label htmlFor="lastName">Last name</label>
                                    <span className="red-text">{errors.lastName}</span>
                                </div>
                                <div className="input-field col s12">
                                    <input
                                        onChange={this.onChange}
                                        value={this.state.username}
                                        error={errors.username}
                                        id="username"
                                        type="text"
                                        className={classnames("", {
                                            invalid: errors.username
                                        })}
                                    />
                                    <label htmlFor="username">Username</label>
                                    <span className="red-text">{errors.username}</span>
                                </div>
                                <div className="input-field col s12">
                                    <input
                                        onChange={this.onChange}
                                        value={this.state.email}
                                        error={errors.email}
                                        id="email"
                                        type="email"
                                        className={classnames("", {
                                            invalid: errors.email
                                        })}
                                    />
                                    <label htmlFor="email">Email</label>
                                    <span className="red-text">{errors.email}</span>
                                </div>
                                <div className="input-field col s12">
                                    <input
                                        onChange={this.onChange}
                                        value={this.state.password}
                                        error={errors.password}
                                        id="password"
                                        type="password"
                                        className={classnames("", {
                                            invalid: errors.password
                                        })}
                                    />
                                    <label htmlFor="password">Password</label>
                                    <span className="red-text">{errors.password}</span>
                                </div>
                                <div className="input-field col s12">
                                    <input
                                        onChange={this.onChange}
                                        value={this.state.password2}
                                        error={errors.password2}
                                        id="password2"
                                        type="password"
                                        className={classnames("", {
                                            invalid: errors.password2
                                        })}
                                    />
                                    <label htmlFor="password2">Confirm Password</label>
                                    <span className="red-text">{errors.password2}</span>
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
                                        className="btn waves-effect waves-light hoverable black white-text accent-3"
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

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
