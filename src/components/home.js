import React from "react";
import "../components/login.css";
import Dd from "./dropdown";
import rbg from '../images/rbg.png';
import rbg1 from '../images/rbg1.png';
import il from '../images/il.png';
import { Link } from 'react-router-dom';
// import cr2 from "../images/cr2.png";

export default class MHomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      images: [rbg, rbg1 , il],

      currentIndex: 0,
    };
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        currentIndex: (prevState.currentIndex + 1) % this.state.images.length,
      }));
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { images, currentIndex } = this.state;
    return (
      <div className="body">
        <div className="header">
          <div>
            <Link to='/userLogin'>
            <button className="btn btn-secondary" id="user_button">
              User
            </button>
            </Link>
            <Dd/>
          </div>
          <div className="middle">
            <div>
              <div className="container">
                <div className="carousel-column">
                  <div className="carousel">
                    {images.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`Image ${index + 1}`}
                        style={{
                          transform: `translateX(-${currentIndex * 100}%)`,
                        }}
                      />
                    ))}
                  </div>
                </div>

                <div className="text-column">
                  <div className="special-text">
                    <h1>Welcome to Perficient</h1>

                    <p>
                      Explore the world of amazing digitalization and discover
                      something new every day.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
        <footer className="footer"> 
        <div className="footer-social"> 
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
        </div>
      </div>
    );
  }
}
