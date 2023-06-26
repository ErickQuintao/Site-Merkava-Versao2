import React from  'react';
import '../../../css/style.css'
import img0Cf9 from '../../../fotos/cf-9gvt.jpg';
import img1Cf9 from '../../../fotos/cf-gvt9.jpg';
import img2Cf9 from '../../../fotos/c-9gvt (2).jpeg';
import img3Cf9 from '../../../fotos/c-9gvt(3.jpeg';
import img4Cf9 from '../../../fotos/c-9gvt.jpeg';

import whatsButton from "../../../fotos/whatsapp.png";
import ImgsSlider from "../imgsSlider";

function ProdutoPrincipal(){
    return(
        <div class="produto-principal">
            <ImgsSlider className="imgp" img0={img0Cf9} img1={img1Cf9}
             img2={img2Cf9}  img3={img3Cf9} img4={img4Cf9}/>
       
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