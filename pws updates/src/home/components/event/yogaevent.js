import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

import event31 from "../../../carouselimages/event31.png";
import event32 from "../../../carouselimages/event32.png";
import event33 from "../../../carouselimages/event33.png";
import event34 from "../../../carouselimages/event34.png";
import event35 from "../../../carouselimages/event35.png";


export default class YogaEvent extends React.Component {
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
    const numberOfImages = 5; // Number of images in the carousel

    this.setState({
      activeIndex: (activeIndex + 1) % numberOfImages
    });
  };

  render() {
    const { activeIndex } = this.state;
    const images = [event31, event32, event33, event34, event35];

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
