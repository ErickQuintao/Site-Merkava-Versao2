import React from 'react';
import '../../../css/style.css'
import { exibirPesq, ocultarPesq, filtrarItens } from './pesquisa'; // Import the necessary functions from './pesquisa' file
import imgFace from '../../../fotos/facebook.png';
import imgInsta from '../../../fotos/instagram.png';
import imgYou from '../../../fotos/youtube.png';
import imgPesq from '../../../fotos/pesquisa.png';
import imgCf5 from '../../../fotos/cf-5gvt.jpeg';
import imgCf7 from '../../../fotos/cf-7gvt.jpeg';
import imgCf9 from '../../../fotos/cf-9gvt.jpg';
import B900mm4gvt from '../../../fotos/Bancada-900mm-4gvt.png';
import carf3gvt from '../../../fotos/carf-3gvt.jpg';
import caa1gvt from "../../../fotos/CAA-1gvt.jpeg";
import ca3gvt from "../../../fotos/ca-3gvts.jpeg";
import capcs from "../../../fotos/capcs(2).jpeg";
import m3gvt from "../../../fotos/m-3gvt.jpeg";
import  ofm  from "../../../fotos/OfM.jpeg";
import whatsapp from '../../../fotos/icons8-whatsapp.gif';

function Header() {
    return(
        <div className='header'>
        <div className="header-princip">
          <div className="divulgacao">
            <p id="pd">FERRAMENTAS EXTREMAMENTE REFORÇADA DE ALTA RESISTÊNCIA E DURABILIDADE</p>
            <a href="./faleConosco.html" className="iconY"><img src={imgFace} className="icon-fac" alt="Facebook" /></a>
            <a href="./faleConosco.html" className="iconY"><img src={imgInsta} className="icon-ins"/></a>
            <a href="./faleConosco.html" className="iconY"><img src={imgYou}className="icon-you" alt="YouTube" /></a>
          </div>
          <header id="header">
            <a href="./index.html"><img src="https://merkavaferramentas.com.br/wp-content/uploads/2022/07/200x34.png" id="IconEmpresa" alt="Logo" /></a>
          
            <a  href={`/`} style={{ textDecoration: 'none' }} id="Home" >HOME</a>

          <a href={`/NossoProduto`} style={{ textDecoration: 'none' }} id="Hprod">NOSSOS PRODUTOS</a> 
            <a href={"https://linkwhats.app/06a04a"} style={{ textDecoration: 'none' }} id="HprodF"><img src={whatsapp}/></a>
            <a style={{ textDecoration: 'none' }} href="./" id="Hpes">
              <img className="img-pesq4" src={imgPesq} alt="Pesquisa" onMouseOver={exibirPesq} />
            </a>
            <div className="pesq" onMouseOver={exibirPesq} onMouseOut={ocultarPesq}>
              <input placeholder="PESQUISAR" autoComplete="off" type="text" className="ipt-pesq" id="filtro" onInput={filtrarItens} />
              <button className="btn-pesq"><img className="img-pesq" src={imgPesq} alt="Pesquisa" /></button>
            </div>
            </header> 
            <div className="c">
                    <img className="img img2" src={imgCf5} alt=""></img>
                    
                    <a  className="b" href="./cf-5gvt.html">Caixa de Ferramentas 5 GVT</a>
                    </div>
                    <div className="c">
                    <img className="img img3" src={imgCf7} alt=""></img>
                    
                    <a  className="b" href="./cf-7gvt.html">Caixa de Ferramentas 7 GVT</a>
                    </div>
                <div className="c">
                    <img className="img img4" src={imgCf9} alt=""></img>
                    
                    <a  className="b" href="./cf-9gvt.html">Caixa de Ferramentas 9 GVT </a>
                    </div>
                    <div className="c">
                    <img className="img img5" src={B900mm4gvt} alt=""></img>
                    
                    <a  className="b a30" href="./cfs-3.html">Caixa de Ferramentas Sanfonada <br></br> 3 Gavetas</a>
                    </div>
                    <div className="c">
                    <img className="img img6" src={carf3gvt} alt=""></img>
                   
                    <a  className="b a31" href="./carf-3gvt.html">Carrinho 3 Gavetas Fechado <br></br> com Suporte para Morsa</a>
                    </div>
                <div className="c">
                    <img className="img img7" src={caa1gvt} alt=""></img>
                   
                    <a  className="b a31" href="./caa-1gvt.html">Carrinho Auxiliar aberto  –<br></br> 1 Gaveta</a>
                    </div>
                    <div className="c">
                    <img  className="img img8"src={ca3gvt} alt=""></img>
                   
                    <a  className="b a32" href="./caa-3gvt.html">Carrinho Auxiliar aberto  – <br></br>3 Gavetas</a>
                    </div>
                    <div className="c">
                    <img className="img9 img" src={capcs} alt=""></img>
                    
                    <a  className="b a33" href="./capcs.html">Carrinho Auxiliar para <br></br> Caixa Sanfonada</a>
                    </div>
                <div className="c">
                    <img  className="img img10"src={m3gvt} alt=""></img>
                    
                    <a  className="b" href="./md-3gvt.html">Mesa Diagnóstico 3 Gavetas</a>
                    </div>
                    <div className="c">
                        <img  className="img img11"src={ofm} alt=""></img>
                        
                        <a  className="b a41" href="./of.html">Oficina Móvel</a>
                   </div>
          
            </div>
            </div>
           
            );
            }
            export default Header;
   