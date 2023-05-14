import React, { useEffect } from 'react';
import './slider.css';
function Slider() {
  useEffect(() => {
    let myIndex = 0;
    const slides = document.getElementsByClassName('mySlides');

    const showSlides = () => {
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
      }
      myIndex++;
      if (myIndex > slides.length) {
        myIndex = 1;
      }
      slides[myIndex - 1].style.display = 'block';
      setTimeout(showSlides, 3000);
    };

    showSlides();
  }, []);

  return (
    <div>
      <div className="first w3-content w3-section"  >
        <img className="mySlides" src="./fotos/Banner.png" alt="Slide 1" />
        <img className="mySlides" src="./fotos/Banner_Carrinho2.png" alt="Slide 2" />
      </div>
    </div>
  );
}

export default Slider;

