import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

import Music from "../layout/Music";
import Navbar from "../layout/Navbar";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "Dashboard"
    }

    this.onLogoutClick = e => {
      e.preventDefault();
      this.props.logoutUser();
    };

    this.handlePageChange = page => {
      this.setState({ currentPage: page });
    };
  }

    render() {
        const { user, isAuthenticated } = this.props.auth;
        return (
            <>
              <Navbar 
                isLoggedIn={isAuthenticated}
                onLogoutClick={this.onLogoutClick}
              />
              <div class="row">
                <div className="col s12 m4 l2">
                  <h4>
                    <b>Hi,</b> {user.username.split(" ")[0]}.
                  </h4>
                </div>
              </div>
              <Music />
            </>
        );
    }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);