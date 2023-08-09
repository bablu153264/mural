import React from 'react';
import '../components/register.css';
import {IoIosPaper} from 'react-icons/io';
import register from '../images/register.png';
import {VscSignIn} from 'react-icons/vsc';

export default class Itregister extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      empid: '',
      phone: '',
      password: '',
      cpassword: '',
      error: '',
    };

    this.onchangename = this.onchangename.bind(this);
    this.onchangeemail = this.onchangeemail.bind(this);
    this.onchangeempid = this.onchangeempid.bind(this);
    this.onchangephone = this.onchangephone.bind(this);
    this.onchangepassword = this.onchangepassword.bind(this);
    this.onchangecpassword = this.onchangecpassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onchangename(e) {
    this.setState({ name: e.target.value });
  }

  onchangeemail(e) {
    this.setState({ email: e.target.value });
  }

  onchangeempid(e) {
    this.setState({ empid: e.target.value });
  }

  onchangephone(e) {
    this.setState({ phone: e.target.value });
  }

  onchangepassword(e) {
    this.setState({ password: e.target.value });
  }

  onchangecpassword(e) {
    this.setState({ cpassword: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const { name, email, empid, phone, password, cpassword } = this.state;

    if (!name || !email || !empid || !phone || !password || !cpassword) {
      this.setState({ error: 'All fields are mandatory.' });
      return;
    }

    if (password !== cpassword) {
      this.setState({ error: 'Passwords do not match.' });
      return;
    }

    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;
    if (!password.match(passwordPattern)) {
      this.setState({
        error: 'Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character.',
      });
      return;
    }

    if (phone.length !== 10) {
      this.setState({ error: 'Enter a valid mobile number.' });
      return;
    }
    this.setState({
      name: '',
      email: '',
      empid: '',
      phone: '',
      password: '',
      cpassword: '',
      error: '',
    });
  }

  render() {
    const { name, email, empid, phone, password, cpassword, error } = this.state;
    return (
      <div className='rbody'>
        {/* <img src={register} className='rbody_image'/> */}
        <div className='Itregister'>
          <IoIosPaper className='ricons'/><span className='rname'>IT Register</span>
        <form onSubmit={this.onSubmit}>
        <br/>
          <div>
            <label>Name</label>&nbsp;
            <input type='text' placeholder='Enter your name' value={name} onChange={this.onchangename} />
          </div>
          <br/>
          <div>
            <label>Email</label>&nbsp;
            <input type='email' placeholder='Enter your email' value={email} onChange={this.onchangeemail} />
          </div>
          <br/>
          <div>
            <label>EMPID</label>&nbsp;
            <input type='number' value={empid} onChange={this.onchangeempid} />
          </div>
          <br/>
          <div>
            <label>MOBILE</label>&nbsp;
            <input type='number' value={phone} onChange={this.onchangephone} />
          </div>
          <br/>
          <div>
          &nbsp;<label>Gender</label> &nbsp;
               <div class="form-check form-check-inline">
               <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                 <label class="form-check-label" for="inlineRadio1">Male</label>
                    </div>
                <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                <label class="form-check-label" for="inlineRadio2">Female</label>
                </div>
                <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
                <label class="form-check-label" for="inlineRadio3">Other </label>
            </div>
          </div>
          <br/>
          <div>
            <label>Password</label>&nbsp;
            <input type='password' value={password} onChange={this.onchangepassword} />
          </div>
          <br/>
          <div>
            <label>CPassword</label>&nbsp;
            <input type='password' value={cpassword} onChange={this.onchangecpassword} />
          </div>
          <br/>
          <div>
            <button type='submit' className='b_signin'><VscSignIn className='sicon'/>&nbsp;Sign Up</button>
          </div>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
        </div>
      </div>
    );
  }
}
