import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

import event41 from "../../../carouselimages/event41.png";
import event42 from "../../../carouselimages/event42.png";
import event43 from "../../../carouselimages/event43.png";
import event44 from "../../../carouselimages/event44.png";
import event45 from "../../../carouselimages/event45.png";
import event46 from "../../../carouselimages/event46.png";



export default class IndependenceEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0
    };
  }

  componentDidMount() {
    this.carouselInterval = setInterval(this.changeImage, 5000); // Change image every 5 seconds
  }

  componentWillUnmount() {
    clearInterval(this.carouselInterval);
  }

  changeImage = () => {
    const { activeIndex } = this.state;
    const numberOfImages = 6; // Number of images in the carousel

    this.setState({
      activeIndex: (activeIndex + 1) % numberOfImages
    });
  };

  render() {
    const { activeIndex } = this.state;
    const images = [event41, event42, event43, event44, event45, event46];

    return (
      <div>
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            {images.map((image, index) => (
              <div
                key={index}
                className={`carousel-item ${index === activeIndex ? 'active' : ''}`}
              >
                <img
                  className="d-block w-100"
                  src={image}
                  alt={`Slide ${index + 1}`}
                  style={{ width: '100%', height: '250px' }}
                />
              </div>
            ))}
          </div>
          <a
            className="carousel-control-prev"
            role="button"
            data-slide="prev"
          >
          </a>
          <a
            className="carousel-control-next"
            role="button"
            data-slide="next"
          >
          </a>
        </div>
      </div>
    );
  }
}
