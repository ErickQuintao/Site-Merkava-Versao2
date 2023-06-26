import React from 'react';
import '../../../css/style.css';
import cVermelho from '../../../fotos/caixaVermelho3.jpeg';
function ProdutoCampeao(){
return(

    <div className="best-selling">
    <h1 className="titleP-best-selling">CONHEÇA NOSSO CAMPEÃO DE VENDAS!</h1>
    <div className="imgProduct item current-item">
        <img className="img-best-selling" src={cVermelho} />
    </div>
    <h2 className="title-best-selling">Caixa de Ferramenta Sanfonada Reforçada</h2>
    <p className="text-best-selling">
         Com um design inovador e construção robusta, nossa caixa de ferramentas sanfonada oferece espaço amplo para organizar suas ferramentas de forma eficiente. Seu mecanismo sanfonado permite fácil acesso aos compartimentos individuais, evitando bagunça e perda de tempo. Construída com materiais de alta qualidade e reforçada para resistir a condições exigentes, esta caixa de ferramentas é perfeita para profissionais  que valorizam o desempenho e a confiabilidade. </p>
        
         <a href={`/CaixaFerramenta7gvt`} 
         className="btn-best-selling">
        <span> CONHEÇA NOSSO PRODUTO</span>  
          </a>
          
        </div>
);

}
export default ProdutoCampeao