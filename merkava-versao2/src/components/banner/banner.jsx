import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/style.css';

import imgBanner from '../../fotos/Banner.png';
import imgBanner1 from '../../fotos/Banner_Carrinho2.png';

function Banner() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100 mySlides" src={imgBanner} alt="Banner 1" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 mySlides" src={imgBanner1} alt="Banner 2" />
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;