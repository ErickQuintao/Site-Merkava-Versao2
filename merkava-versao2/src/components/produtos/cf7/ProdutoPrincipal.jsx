import React, { useState } from 'react';

import '../../../css/style.css'
import img0Cf7 from '../../../fotos/caixaVermelha5.jpeg';
import img1Cf7 from '../../../fotos/caixaVermelho3.jpeg';
import img2Cf7 from '../../../fotos/caixaVermelho4.jpeg';
import img3Cf7 from '../../../fotos/cf-7gvt.jpeg';
import whatsButton from "../../../fotos/whatsapp.png";
import {

  CarouselProvider,
  ImageWithZoom,
}  from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

function ProdutoPrincipal(){
  const [imagemVisivel, setImagemVisivel] = useState(img0Cf7);

const exibirImagem = (src) => {
  setImagemVisivel(src);
};
    return(
        <div class="produto-principal">
             <div  className="imgp">
  <CarouselProvider className="imgp"
   
      infinite
    visibleSlides={1}
    totalSlides={5}
  >

      <div className='imgp'>
        <ImageWithZoom className="imgSlider" src={imagemVisivel}/>
      
       </div>
      
   
    <button className="btn-slider btn-1" onClick={() => exibirImagem(img0Cf7)}  ><img src={img0Cf7}/></button>
    <button className="btn-slider btn-2"  onClick={() => exibirImagem(img1Cf7)}><img src={img1Cf7}/></button>
    <button className="btn-slider btn-3"  onClick={() => exibirImagem(img2Cf7)}><img src={img2Cf7}/></button>
    <button className="btn-slider btn-4"  onClick={() => exibirImagem(img3Cf7)}><img src={img3Cf7}/></button>

  </CarouselProvider>
  </div>
        <h1 class="prod-h1">Caixa de Ferramentas 7 GVT</h1>
        
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