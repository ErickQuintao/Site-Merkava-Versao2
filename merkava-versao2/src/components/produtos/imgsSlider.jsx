import React from 'react';
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  DotGroup,
  ImageWithZoom,
  Slide,
  Slider,
}  from 'pure-react-carousel';

import'../../css/style.css';

export default function ImgsSlider (props) {
return (
    <div className="imgp">
  <CarouselProvider
    visibleSlides={1}
    totalSlides={6}
    step={2}
    dragStep={2}
    naturalSlideWidth={200}
    naturalSlideHeight={300}
  >
    <Slider >
      <Slide index={0}>
        <ImageWithZoom src={props.img0} />
      </Slide>
      <Slide index={1}>
        <ImageWithZoom src={props.img1} />
      </Slide>
      <Slide index={2}>
        <ImageWithZoom src={props.img2} />
      </Slide>
      <Slide index={3}>
        <ImageWithZoom src={props.img3} />
      </Slide>
      <Slide index={4}>
        <ImageWithZoom src={props.img4} />
      
      </Slide>
      <Slide index={5}>
        <ImageWithZoom src={props.img5} />
      </Slide>
    </Slider>
    <ButtonBack >Back</ButtonBack>
    <ButtonNext>Next</ButtonNext>
    <DotGroup dotNumbers />
  </CarouselProvider>
  </div>
);
};