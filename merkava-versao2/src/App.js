import React from 'react';
import Header from './components/header/header';
import Banner from './components/banner/banner';
import Slider from './components/slider-product/slider';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Slider/>
    </div>
  );
}

export default App;
