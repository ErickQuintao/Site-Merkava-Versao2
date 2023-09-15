import React from 'react';
import '../../../css/style.css';
import facebook from  '../../../fotos/facebook.png';
import insta from '../../../fotos/instagram.png';
import imgTik from '../../../fotos/tik-tok.png';
import imgCf9 from '../../../fotos/9-gvts/WhatsApp Image 2023-09-11 at 19.24.36.jpeg';
import imgCf7 from '../../../fotos/7-gvts/WhatsApp Image 2023-09-11 at 19.27.59.jpeg';
import  imgCf5  from "../../../fotos/cf-5gvt.jpeg";
import cf3gvt from '../../../fotos/cf-3-gvt.jpeg';

function Sobrenos (){
    return(
       
<div className="sobrenos">
    <h2 className="titleS1 titleS">SOBRE NÓS</h2>
    <p className="pS" >
A MERKAVA ferramentas Auxiliares,
 surgiu a três anos, com uma proposta
  diferente, oferecer para o profissional 
  ferramentas que realmente satisfaçam a
 mais alta exigência do mercado.<br/>
 Acreditamos firmemente 
 que nenhuma empresa se sustenta
oferendo produtos que não atendam
os níveis mais alto de satisfação
entre seus clientes, quando 
acontece os clientes se tornam 
parceiros da empresa e assim como
 numa parceria a uma troca mútua 
 de benefícios.<br/> Isso a MERKAVA
  acredita e se empenha, trazendo
   ferramentas de alta resistência,
    qualidade e durabilidade para o
     mercado.<br/> Nosso propósito
      é ser uma das empresas top 10 
      na pesquisa por ferramentas
       auxiliares do Brasil.</p>
    <a href="https://www.facebook.com/regis.quintao.7?mibextid=b06tZ0" className="iconS">
        <img src={facebook} className="icon-fim fac"/>
        </a>
    <a href={`/`} className="iconS">
        <img src={insta} className="icon-fim ins"/>
        </a>
    <a href="https://www.tiktok.com/@ferramentasmerkava" target="_blank"   className="iconS">
        <img src={imgTik} className="icon-fim  tik"/>
        </a>
     
    <h2 className="titleS titleS2">PROMOÇÃO</h2>
    <div className="fim-one">
        <img className="imgs-fim" src={imgCf9} />
        
        <a href={`/CaixaFerramenta9gvt`} className=" gvtnine">Caixa de Ferramentas 9 GVT</a>
    </div>
    <div className="fim-two">
        <img className="imgs-fim" src={ imgCf5 } />
        <a href={`/CaixaFerramenta5gvt`} className=" of-btn">Caixa de Ferramenta 5 GVT</a>
    </div>
   <div className="fim-three">
    <img className="imgs-fim " src={imgCf7} />
    <a href={`/CaixaFerramenta7gvt`} className="gvtseven">Caixa de Ferramentas 7 GVT</a>
   </div>
   <div className="fim-four">
    <img className="imgs-fim" src={cf3gvt} />
    <a href={`/CaixaFerramenta3gvt`} className="gvtthree">Caixa de Ferramentas Sanfonada 3 Gavetas</a>
   </div>
  
</div>
    )
}
export default Sobrenos;