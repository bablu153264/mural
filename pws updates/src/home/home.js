import React from "react";
import { Link } from "react-scroll";
import "./home.css";

//importing required compoenets 
import Imagecarousel1 from "../carousel/imagecarousel1";
import Events from "./components/event/event";
import logo from "../images/logo.png";
import Shareicons from "./components/share/share";
import LandingDirectorscard from "./components/directors/directorscard";

//importing icons from reat-icons
import { BsPhoneFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import {SlLogin} from 'react-icons/sl';
import {BiSolidUserCircle} from 'react-icons/bi';
import {VscSignIn} from 'react-icons/vsc';


export default class HomePage extends React.Component {

  render() {
    return (
      <div className="landingpage">
        
        
        
        
      
        <div className="homeheader">
          <img src={logo} className="headerpwslogo" />
          <div className="headercomponents">
            <Link
              activeClass="active"
              to="landingevents"
              spy={true}
              smooth={true}
              offset={-50}
              duration={100}
              style={{ textDecoration: 'none' }}
            >
              <span className="eventsbutton">Events</span>
            </Link>
            <Link
              activeClass="active"
              to="director"
              spy={true}
              smooth={true}
              offset={-90}
              duration={100}
            >
              <span className="aboutusbutton">About Us</span>
            </Link>
            <Link >
              <div id="landingloginpagebutton">
                Login<SlLogin/>
              </div>
            </Link>
          </div>
        </div>







        <div className="homemiddle">
          <div className="landingcarousel">
            <Imagecarousel1 />
          </div>
          <div id="landingevents" className="landingevents">
            <Events />
          </div>
          
          <div id="director">
            {/* <DirectorsCard id="landingdirectors" /> */}
            <LandingDirectorscard/>
          </div>
        </div>









        <div className="landingpagefooter">
          <div>
            <img src={logo} className="footerpwslogo" />
            <span className="footerpws">Perficient Work Space</span>
          </div>
          <div className="footercontact">
            <div>
              <h4>Contacts</h4>
            </div>
            <BsPhoneFill />
            <span>(044) 42040045 </span> <br />
            <FaLocationDot />
            <spna>
              {" "}
              A-17 Guindy Industrial Estate SIDCO
              <br /> &nbsp;&nbsp;&nbsp; Guindy Chennai/Tamil Nadu 600032
            </spna>{" "}
            <br />
            <MdEmail />
            <span>pws@gmail.com</span>
          </div>
          <div className="footerlocation"> 
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7774.695497353801!2d80.20316689161432!3d13.013513199222729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267009ff5769f%3A0x2d6dc5e8cf1f66ee!2sPerficient%20India%20Pvt%20Ltd.!5e0!3m2!1sen!2sin!4v1692190880531!5m2!1sen!2sin"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="perficientlocation"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
          <div className="footershare">
            <Shareicons/>
          </div>
      </div>
    );
  }
}
