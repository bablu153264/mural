import React from "react";
import '../components/document.css';
import { Component } from "react";
import { LuFacebook } from "react-icons/lu";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";
import {FaBars} from 'react-icons/fa';

export default class Document extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navbarVisible: false,
    };
  }
  toggleNavbar = () => {
    this.setState((prevState) => ({
      navbarVisible: !prevState.navbarVisible,
    }));
  };
  render() {
    const { navbarVisible } = this.state;
    return (
      <div className="docBody">
        <div className="document">
          <div className="header">
            <div>
              <div className="home-nav">
                <span className="dots-icon" onClick={this.toggleNavbar}>
                  Dashboard &nbsp; <FaBars/>
                </span>
              </div>

              {navbarVisible && (
                <div className="horizontal-navbar">
                  <a href="/">My Profile</a>
                  <a href="/">Document</a>
                  <a href="/">Attendance</a>
                  <a href="/">Queries</a>
                </div>
              )}
            </div>
          </div>

          <div className="footer">
            <footer className="footer">
              <div className="footer-social">
                <LuFacebook className="facebook_icon" />
                <AiOutlineLinkedin className="linkedin_icon" />
                <FiInstagram className="instagram_icon" />
              </div>
              <div class="footer-address">
                <p>
                  Perficient pvt. Ltd. Guindy, Chennai,Tamil Nadu, India Email:
                  Perficient@example.com Phone: +123 456 7890
                </p>
              </div>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}
