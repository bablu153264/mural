import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { BiLogIn } from "react-icons/bi";
import { GiArchiveRegister } from "react-icons/gi";
import "../components/userLogin.css";
import tt from '../images/tt.png';
import { Link } from 'react-router-dom';


export default class TtLogin extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
          <div>
            <img src={tt} className="ul_image"></img>
          </div>
      <div className="ttuserbody">
        <label>
          <h3> TT Login</h3>
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
            <br/>
            <div className="button_register">
              New User? &nbsp;
              <Link to='/Ttregister'>
              <button type="submit">
                {" "}
                <GiArchiveRegister className="icons" /> Register
              </button>
              </Link>
            </div>
          </form>
      </div>
        </div>
      </div>
    );
  }
}
