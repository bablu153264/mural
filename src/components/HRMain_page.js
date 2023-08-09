import React, { Component } from 'react';
import './signup.css';
class SignUpPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navbarVisible: false
    };
  }
  toggleNavbar = () => {
    this.setState(prevState => ({
      navbarVisible: !prevState.navbarVisible
    }));
  };
  render() {
    const { navbarVisible } = this.state;
    return (
      <div>
        <div className="home-nav">
          <span className="home-icon">Home</span>
          <span className="dots-icon" onClick={this.toggleNavbar}>
            ...
          </span>
        </div>
        {navbarVisible && (
          <div className="horizontal-navbar">
            <a href="/">My Profile</a>
            <a href="/">Adding User</a>
            <a href="/">Leave Request</a>
            <a href="/">Show Queries</a>
          </div>
        )}
      </div>
    );
  }
}
export default SignUpPage;