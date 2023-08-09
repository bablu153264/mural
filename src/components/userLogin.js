import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { BiLogIn } from "react-icons/bi";
import { GiArchiveRegister } from "react-icons/gi";
import "../components/userLogin.css";
import Dd from "./dropdown";
import ul from '../images/ul.png';



export default class UserLogin extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>

        {/* <div className="header">
          </div> */}
          <div>
            <img src={ul} className="ul_image"></img>
          </div>

      <div className="userbody">
        <br/>
        <label>
          <h3> User Login</h3>
        </label>
        <div className="userform">
          <form>
            <br/>
            <div className="username">
              <i>
                <AiOutlineUser className="icons" />
              </i>
              <input
                type="emial"
                placeholder="Enter Email"
                required
                className="Lusername"
              ></input>
            </div>
            <div className="password">
              <RiLockPasswordLine className="icons" />
              <input
                type="password"
                placeholder="Enter Password"
                required
                className="Lpassword"
              ></input>
            </div>
            <br/>
            <div className="button_login">
              <button type="submit">
                Login <BiLogIn className="icons" />
              </button>
            </div>
            {/* <div className="button_register">
              New User? &nbsp;
              <button type="submit">
                {" "}
                <GiArchiveRegister className="icons" /> Register
              </button>
            </div> */}
          </form>
      </div>
        </div>
        {/* <div className="footer">
        <footer class="footer"> 
        <div class="footer-social"> 
        <a href="#">
            <img src="instagram-icon.png" alt="Instagram"/>
            </a> 
            <a href="#">
                <img src="facebook-icon.png" alt="Facebook"/>
                </a> 
                <a href="#">
                    <img src="linkedin-icon.png" alt="LinkedIn"/></a> 
                    </div> 
                    <div class="footer-address"> 
                    <p>Perficient pvt. Ltd. Guindy, Chennai,Tamil Nadu, India</p> 
                    <p>Email: Perficient@example.com</p> 
                    <p>Phone: +123 456 7890</p> 
                    </div> 
                    </footer>
        </div> */}
      
      </div>
    );
  }
}
