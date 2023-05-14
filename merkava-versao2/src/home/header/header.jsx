import React from 'react';
import './header.css';
import { exibirPesq, ocultarPesq, filtrarItens } from './pesquisa'; // Import the necessary functions from './pesquisa' file

function Header() {
  return (
    <div>
      <div className="header-princip">
        <div className="divulgacao">
          <p id="pd">FERRAMENTAS EXTREMAMENTE REFORÇADA DE ALTA RESISTÊNCIA E DURABILIDADE</p>
          <a href="./faleConosco.html" className="iconY"><img src="./fotos/facebook.png" className="icon-fac" alt="Facebook" /></a>
          <a href="./faleConosco.html" className="iconY"><img src="./fotos/instagram.png" className="icon-ins" alt="Instagram" /></a>
          <a href="./faleConosco.html" className="iconY"><img src="./fotos/youtube.png" className="icon-you" alt="YouTube" /></a>
        </div>
        <header id="header">
          <a href="./index.html"><img src="https://merkavaferramentas.com.br/wp-content/uploads/2022/07/200x34.png" id="IconEmpresa" alt="Logo" /></a>
          <a style={{ textDecoration: 'none' }} id="Home" href="./index.html">HOME</a>
          <a style={{ textDecoration: 'none' }} href="./nossosProdutos.html" id="Hprod">NOSSOS PRODUTOS</a>
          <a style={{ textDecoration: 'none' }} href="./faleConosco.html" id="HprodF">FALE CONOSCO</a>
          <a style={{ textDecoration: 'none' }} href="./" id="Hpes">
            <img className="img-pesq4" src="./fotos/pesquisa.png" alt="Pesquisa" onMouseOver={exibirPesq} />
          </a>
          <div className="pesq" onMouseOver={exibirPesq} onMouseOut={ocultarPesq}>
            <input placeholder="PESQUISAR" autoComplete="off" type="text" className="ipt-pesq" id="filtro" onInput={filtrarItens} />
            <button className="btn-pesq"><img className="img-pesq" src="./fotos/pesquisa.png" alt="Pesquisa" /></button>
          </div>
          <div className="miniproduto">
            <div className="c">
              <img className="img img1" src="./fotos/Bancada-900mm-4gvt.png" alt="Imagem 1" />
              <a  className="b" href="./bacada900.html">Bancada 900mm 4 Gavetas</a>
            </div>
            <div className="c">
                    <img class="img img2" src="./fotos/cf-5gvt.jpeg"></img>
                    
                    <a  class="b" href="./cf-5gvt.html">Caixa de Ferramentas 5 GVT</a>
                    </div>
                    <div className="c">
                    <img class="img img3" src="./fotos/cf-7gvt.jpeg"></img>
                    
                    <a  class="b" href="./cf-7gvt.html">Caixa de Ferramentas 7 GVT</a>
                    </div>
                <div className="c">
                    <img class="img img4" src="./fotos/cf-9gvt.jpg"></img>
                    
                    <a  class="b" href="./cf-9gvt.html">Caixa de Ferramentas 9 GVT </a>
                    </div>
                    <div className="c">
                    <img class="img img5" src="./fotos\Bancada-900mm-4gvt.png"></img>
                    
                    <a  class="b a30" href="./cfs-3.html">Caixa de Ferramentas Sanfonada <br></br> 3 Gavetas</a>
                    </div>
                    <div className="c">
                    <img class="img img6" src="./fotos/carf-3gvt.jpg"></img>
                   
                    <a  class="b a31" href="./carf-3gvt.html">Carrinho 3 Gavetas Fechado <br></br> com Suporte para Morsa</a>
                    </div>
                <div className="c">
                    <img class="img img7" src="./fotos/CAA-1gvt.jpeg"></img>
                   
                    <a  class="b a31" href="./caa-1gvt.html">Carrinho Auxiliar aberto  –<br></br> 1 Gaveta</a>
                    </div>
                    <div className="c">
                    <img  class="img img8"src="./fotos\ca-3gvts.jpeg"></img>
                   
                    <a  class="b a32" href="./caa-3gvt.html">Carrinho Auxiliar aberto  – <br></br>3 Gavetas</a>
                    </div>
                    <div className="c">
                    <img class="img9 img" src="./fotos\capcs(2).jpeg"></img>
                    
                    <a  class="b a33" href="./capcs.html">Carrinho Auxiliar para <br></br> Caixa Sanfonada</a>
                    </div>
                <div className="c">
                    <img  class="img img10"src="./fotos\m-3gvt.jpeg"></img>
                    
                    <a  class="b" href="./md-3gvt.html">Mesa Diagnóstico 3 Gavetas</a>
                    </div>
                    <div className="c">
                        <img  class="img img11"src="./fotos\OfM.jpeg"></img>
                        
                        <a  class="b a41" href="./of.html">Oficina Móvel</a>
                   </div>
          </div>
        </header>
      </div>
    </div>
  );
}

export default Header;

