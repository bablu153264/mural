
import React from 'react';
import './share.css'; 
import {BiSolidShareAlt} from "react-icons/bi";
import {FaFacebookF} from 'react-icons/fa';
import {PiWhatsappLogoBold} from 'react-icons/pi';
import {CgTwitter} from 'react-icons/cg';
import {RxLinkedinLogo} from 'react-icons/rx';
import {BiLogoInstagramAlt} from 'react-icons/bi';
import {FaGithub} from 'react-icons/fa';

class Shareicons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }

  toggleMenu = () => {
    this.setState((prevState) => ({
      active: !prevState.active,
    }));
  };

  render() {
    const { active } = this.state;

    return (
      <div className={`menu ${active ? 'active' : ''}`}>
        <div className="toggle" onClick={this.toggleMenu}>
          <BiSolidShareAlt name="share-social" />
        </div>
        <div className="icon-container">
          <ul className="icon-list">
            <li style={{ '--i': 0, '--clr': '#1877f2', '--angle': '0deg' }}>
              <a href="https://twitter.com/PerficientIndia" target='_blank'>
                <FaFacebookF name="logo-facebook" />
              </a>
            </li>
            <li style={{ '--i': 2, '--clr': '#1da1f2', '--angle': '90deg' }}>
              <a href="https://twitter.com/PerficientIndia" target='_blank'>
                <CgTwitter name="logo-twitter" />
              </a>
            </li>
            <li style={{ '--i': 3, '--clr': '#0a66c2', '--angle': '135deg' }}>
              <a href="https://www.linkedin.com/company/perficient-india" target='_blank'>
                <RxLinkedinLogo name="logo-linkedin" />
              </a>
            </li>
            <li style={{ '--i': 4, '--clr': '#c32aa3', '--angle': '180deg' }}>
              <a href="https://www.instagram.com/perficientindia/" target='_blank'>
                <BiLogoInstagramAlt name="logo-instagram" />
              </a>
            </li>
            <li style={{ '--i': 5, '--clr': '#1b1e21', '--angle': '225deg' }}>
              <a href="https://github.com/Perficient" target='_blank'>
                <FaGithub name="logo-github" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Shareicons;
