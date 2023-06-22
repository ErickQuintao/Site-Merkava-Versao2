import React from 'react';
import '../css/style.css';
import Header from '../principal/header/header';
import Banner from '../principal/banner/banner';
import Slider from '../principal/slider-product/slider';
import ProdutoCampeao from '../principal/produtoCampeao/produtoCampeao';
import Depoimento from '../principal/depoimento/depoimento';
import Caracteristicas from '../principal/caracteristicas/caracteristica';
import Info from '../principal/info/info';

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
      </div>
    )

}
export default Home