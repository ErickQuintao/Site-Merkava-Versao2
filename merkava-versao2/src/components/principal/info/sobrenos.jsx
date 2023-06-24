import React from 'react';
import '../../../css/style.css';
import facebook from  '../../../fotos/facebook.png';
import insta from '../../../fotos/instagram.png';
import you from '../../../fotos/youtube.png';
import imgCf9 from '../../../fotos/cf-9gvt.jpg';
import imgCf7 from '../../../fotos/cf-7gvt.jpeg';
import  ofm  from "../../../fotos/OfM.jpeg";
import cf3gvt from '../../../fotos/cf-3-gvt.jpeg';

function Sobrenos (){
    return(
       
<div className="sobrenos">
    <h2 className="titleS1 titleS">SOBRE NÓS</h2>
    <p className="pS" >A MERKAVA ferramentas Auxiliares, surgiu a três anos, com uma proposta diferente, oferecer para o profissional ferramentas que realmente satisfaçam a mais alta exigência do mercado. Acreditamos firmemente que nenhuma empresa se sustenta oferendo produtos que não atendam os níveis mais alto de satisfação entre seus clientes, quando acontece os clientes se tornam parceiros da empresa e assim como numa parceria a uma troca mútua de benefícios. Isso a MERKAVA acredita e se empenha, trazendo ferramentas de alta resistência, qualidade e durabilidade para o mercado. Nosso propósito é ser uma das empresas top 10 na pesquisa por ferramentas auxiliares do Brasil.</p>
    <a href="" className="iconS">
        <img src={facebook} className="icon-fim fac"/>
        </a>
    <a href="" className="iconS">
        <img src={insta} className="icon-fim ins"/>
        </a>
    <a href=""className="iconS">
        <img src={you} className="icon-fim  you"/>
        </a>
     
    <h2 className="titleS titleS2">PROMOÇÃO</h2>
    <div className="fim-one">
        <img className="imgs-fim" src={imgCf9} />
        
        <a href="" className=" gvtnine">Caixa de Ferramentas 9 GVT</a>
    </div>
    <div className="fim-two">
        <img className="imgs-fim" src={ofm} />
        <a href="" className=" of-btn">Oficina Móvel</a>
    </div>
   <div className="fim-three">
    <img className="imgs-fim " src={imgCf7} />
    <a href="" className="gvtseven">Caixa de Ferramentas 7 GVT</a>
   </div>
   <div className="fim-four">
    <img className="imgs-fim" src={cf3gvt} />
    <a href="" className="gvtthree">Caixa de Ferramentas Sanfonada 3 Gavetas</a>
   </div>
  
</div>
    )
}
export default Sobrenos;