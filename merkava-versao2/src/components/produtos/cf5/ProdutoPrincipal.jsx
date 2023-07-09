import React, { useState } from 'react';

import '../../../css/style.css'
import img0Cf5 from '../../../fotos/cf-5gvt.jpeg';
import img1Cf5 from '../../../fotos/cf5-2.jpeg';
import img2Cf5 from '../../../fotos/cf5-3.jpeg';
import img3Cf5 from '../../../fotos/cf5-4.jpeg';
import whatsButton from "../../../fotos/whatsapp.png";
import {

  CarouselProvider,
  ImageWithZoom,
}  from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

function ProdutoPrincipal(){
  const [imagemVisivel, setImagemVisivel] = useState(img0Cf5);

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
      
   
    <button className="btn-slider btn-1" onClick={() => exibirImagem(img0Cf5)}  ><img src={img0Cf5}/></button>
    <button className="btn-slider btn-2"  onClick={() => exibirImagem(img1Cf5)}><img src={img1Cf5}/></button>
    <button className="btn-slider btn-3"  onClick={() => exibirImagem(img2Cf5)}><img src={img2Cf5}/></button>
    <button className="btn-slider btn-4"  onClick={() => exibirImagem(img3Cf5)}><img src={img3Cf5}/></button>

  </CarouselProvider>
  </div>
        <h1 class="prod-h1">Caixa de Ferramentas 5 GVT</h1>
        
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