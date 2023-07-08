import React from 'react';
import '../css/style.css';
import Header from '../components/principal/header/header';
import Banner from '../components/principal/banner/banner';
import Slider from '../components/principal/slider-product/slider';
import ProdutoCampeao from '../components/principal/produtoCampeao/produtoCampeao';
import Depoimento from '../components/principal/depoimento/depoimento';
import Caracteristicas from '../components/principal/caracteristicas/caracteristica';
import Info from '../components/principal/info/info';
import Whatsapp from '../components/whatsapp/Whatsapp';

function Home (){
    return(
        <div >
        <Header/>
      <Banner/>
      <Slider/>
      <ProdutoCampeao/>
      <Depoimento/>
      <Caracteristicas/>
      <Info/>
      <Whatsapp/>
      </div>
    )

}
export default Home