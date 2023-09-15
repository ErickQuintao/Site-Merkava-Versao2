import React from 'react';
import '../../../css/style.css'
import { exibirPesq, ocultarPesq, filtrarItens } from './pesquisa'; // Import the necessary functions from './pesquisa' file
import imgFace from '../../../fotos/facebook.png';
import imgInsta from '../../../fotos/instagram.png';
import imgTik from '../../../fotos/tik-tok.png';
import imgPesq from '../../../fotos/pesquisa.png';
import imgCf5 from '../../../fotos/cf-5gvt.jpeg';
import imgCf7 from '../../../fotos/7-gvts/WhatsApp Image 2023-09-11 at 19.27.59.jpeg';
import imgCf9 from '../../../fotos/9-gvts/WhatsApp Image 2023-09-11 at 19.24.36.jpeg';
import imgCf3 from '../../../fotos/cf-3-gvt.jpeg';
import logo from '../../../fotos/logo-fm.jpeg';
import whatsapp from '../../../fotos/icons8-whatsapp.gif';

function Header() {
    return(
        <div className='header'>
        <div className="header-princip">
          <div className="divulgacao">
            <p id="pd">FERRAMENTAS EXTREMAMENTE REFORÇADA DE ALTA RESISTÊNCIA E DURABILIDADE</p>
            <a href="https://www.facebook.com/regis.quintao.7?mibextid=b06tZ0"   target="_blank" className="iconY"><img src={imgFace} className="icon-fac" alt="Facebook" /></a>
            <a href={`/`}   target="_blank" className="iconY"><img src={imgInsta} className="icon-ins"/></a>
            <a href="https://www.tiktok.com/@ferramentasmerkava" target="_blank" className="iconY"><img src={imgTik}className="icon-tik" alt="YouTube" /></a>
          </div>
          <header id="header">
            <a href={`/`}><img src={logo} id="IconEmpresa" alt="Logo" /></a>
          
            <a  href={`/`} style={{ textDecoration: 'none' }} id="Home" >HOME</a>
          <a href={`/NossoProduto`} style={{ textDecoration: 'none' }} id="Hprod">NOSSOS PRODUTOS</a> 
          <a href={`/PersonalizarMeuProduto`} style={{ textDecoration: 'none' }} id="HprodP">PERSONALIZAR PRODUTO</a> 
            <a href={"https://linkwhats.app/06a04a"} target='_blank' style={{ textDecoration: 'none' }} id="HprodF"><img src={whatsapp}/></a>
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
                    
                    <a  className="b" href={`/CaixaFerramenta5gvt`}>Caixa de Ferramentas 5 GVT</a>
                    </div>
                    <div className="c">
                    <img className="img img3" src={imgCf7} alt=""></img>
                    
                    <a  className="b" href={`/CaixaFerramenta7gvt`}>Caixa de Ferramentas 7 GVT</a>
                    </div>
                <div className="c">
                    <img className="img img4" src={imgCf9} alt=""></img>
                    
                    <a  className="b" href={`/CaixaFerramenta9gvt`}>Caixa de Ferramentas 9 GVT </a>
                    </div>
                    <div className="c">
                    <img className="img img5" src={imgCf3} alt=""></img>
                    
                    <a  className="b a30" href={`/CaixaFerramenta3gvt`}>Caixa de Ferramentas Sanfonada <br></br> 3 Gavetas</a>
                    </div>
          
            </div>
            </div>
           
            );
            }
            export default Header;