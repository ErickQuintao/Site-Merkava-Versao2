import React from 'react';
import Header from './components/header/header';
import Banner from './components/banner/banner';
import Slider from './components/slider-product/slider';
import ProdutoCampeao from './components/produtoCampeao/ProdutoCampeao';

import './App.css';
function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Slider/>
      <ProdutoCampeao/>
    </div>
  );
}

export default App;
