
import React from'react';
import '../../../css/style.css';
import foto1 from '../../../fotos/loop/foto-1.jpeg';
import foto2 from '../../../fotos/loop/foto-2.jpeg';
import foto3 from '../../../fotos/loop/foto-3.jpeg';
import foto4 from '../../../fotos/loop/foto-4.jpeg';
import foto5 from '../../../fotos/loop/foto-5.jpeg';
import foto6 from '../../../fotos/loop/foto-6.jpeg';
import foto7 from '../../../fotos/loop/foto-7.jpeg';
import foto8 from '../../../fotos/loop/foto-8.jpeg';
import foto9 from '../../../fotos/loop/foto-9.jpeg';
import foto10 from '../../../fotos/loop/foto-10.jpeg';
import foto11 from '../../../fotos/loop/foto-1.jpeg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    focoOnSelect:true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 710,
      settings: {
        slidesToShow: 1,
        autoplaySpeed: 5000
      }
    }
  ]
  };
  return (
    <div>
    <Slider {...settings}>
      <div className='container flicking-panel'>
        <img className='imgProduct item current-item' src={foto1}></img>
      </div>
      <div className='container flicking-panel'>
        <img className='imgProduct item current-item' src={foto2}></img>
      </div>
      <div className='container flicking-panel'>
        <img className='imgProduct item current-item' src={foto3}></img>
      </div>
      <div className='container flicking-panel'>
        <img className='imgProduct item current-item' src={foto4}></img>
      </div>
      <div className='container flicking-panel'>
        <img className='imgProduct item current-item' src={foto5}></img>
      </div>
      <div className='container flicking-panel'>
        <img className='imgProduct item current-item' src={foto6}></img>
      </div>
      <div className='container flicking-panel'>
        <img className='imgProduct item current-item' src={foto7}></img>
      </div>
      <div className='container flicking-panel'>
        <img className='imgProduct item current-item' src={foto8}></img>
      </div>
      <div className='container flicking-panel'>
        <img className='imgProduct item current-item' src={foto9}></img>
      </div>
      <div className='container flicking-panel'>
        <img className='imgProduct item current-item' src={foto10}></img>
      </div>
      <div className='container flicking-panel'>
        <img className='imgProduct item current-item' src={foto11}></img>
      </div>
      
    </Slider>
    <a href={`/NossoProduto`}  className="btn-more-products"><span >Mais Produtos</span></a>
    </div>
  );
}
