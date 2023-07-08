import React from 'react';
import '../../../css/style.css';
import imgBanner from '../../../fotos/Banner.png';
import imgBanner1 from '../../../fotos/Banner_Carrinho2.png';
import Carousel from "nuka-carousel"

export default function Banner () {
  const params={
    autoplay: 100,
    slidesToshow: 2,
    wrapAround: true
  }
  return (
    <div>
  <Carousel {...params}  >
      <img className="mySlides" src={imgBanner} alt="Banner 1" />
      <img className="mySlides" src={imgBanner1} alt="Banner 2" />
      </Carousel>   
    </div>
  );
}