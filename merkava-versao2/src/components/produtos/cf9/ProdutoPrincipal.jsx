import React from  'react';
import '../../../css/style.css'
import img0Cf9 from '../../../fotos/cf-9gvt.jpg';
import img1Cf9 from '../../../fotos/cf-gvt9.jpg';
import img2Cf9 from '../../../fotos/c-9gvt (2).jpeg';
import img3Cf9 from '../../../fotos/c-9gvt(3.jpeg';
import img4Cf9 from '../../../fotos/c-9gvt.jpeg';
import whatsButton from "../../../fotos/whatsapp.png";
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  ImageWithZoom,
  Slide,
  Slider,
}  from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import back from '../../../fotos/back.png';
import forward from '../../../fotos/forward.png';
function ProdutoPrincipal(){
    return(
        <div class="produto-principal">
             <div  className="imgp">
  <CarouselProvider className="imgp"
  
      infinite
    visibleSlides={1}
    totalSlides={5}
  >
    <Slider  
    >
      <Slide index={0}>
        <ImageWithZoom className="imgSlider" src={img0Cf9} />
      </Slide>
      <Slide index={1}>
        <ImageWithZoom className="imgSlider" src={img1Cf9} />
      </Slide>
      <Slide index={2}>
        <ImageWithZoom className="imgSlider" src={img2Cf9} />
      </Slide>
      <Slide index={3}>
        <ImageWithZoom className="imgSlider" src={img3Cf9} />
      </Slide>
      <Slide index={4}>
        <ImageWithZoom className="imgSlider" src={img4Cf9} />
      
      </Slide>
     
    </Slider>
    <ButtonBack className="btn-slider btn-left" ><img src={back}/></ButtonBack>
    <ButtonNext className="btn-slider btn-right" ><img src={forward}/></ButtonNext>

  </CarouselProvider>
  </div>
        <h1 class="prod-h1">Caixa de Ferramentas 9 GVT</h1>
        
        <p id="txt-cf5">É uma ferramenta com durabilidade por mais de 10 ANOS <br/>
            <br/>
            São Ferramentas extremamente reforçada<br/> <br/>
            De alta Resistência e durabilidade<br/><br/>
            
            Especificações do material:<br/>
            Chapa 090 mm barras de articulação 19x 3.3 mm a rebite de ferro maciço alça feita no tubo 19 MM x 1.2 mm junções em solda mig</p>
            <label id="label">Comprimento</label>
            <select >
                <option  selected="selected">Selecione</option>
                <option>50 cm </option>
                <option>60 cm</option>
            </select>
            <div class="whatsapp">
                <a class="what"href="https://linkwhats.app/06a04a"
                ><img src={whatsButton}/> 
                <p class="p-what">Fazer orçamento</p> </a>    
            </div>
          
        </div>
    )
}
export default ProdutoPrincipal