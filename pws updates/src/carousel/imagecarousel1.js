import React from 'react';

//importing bootstrap abd carousel
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/css/bootstrap.css";
import { Carousel } from 'react-bootstrap';

// Import the CSS file
import '../carousel/imagecarousel.css';

// Importing images
import crousel from '../carouselimages/crousel.png';
import crousel3 from '../carouselimages/crousel3.png';
import crousel2 from '../carouselimages/crousel2.png';
import crousel4 from '../carouselimages/crousel4.png';
import crousel5 from '../carouselimages/crousel5.png';

const Imagecarousel1 = () => {
  return (
    <div>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block  carousel-image"
          src={crousel}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block  carousel-image"
          src={crousel2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block  carousel-image"
          src={crousel3}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block  carousel-image"
          src={crousel4}
          alt="Fourth slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block  carousel-image"
          src={crousel5}
          alt="Fifth slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
  );
};

export default Imagecarousel1;
