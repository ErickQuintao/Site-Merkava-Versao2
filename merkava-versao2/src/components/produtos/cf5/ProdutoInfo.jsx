import React from 'react';
import '../../../css/style.css';
import {funcDes , funcInf} from './produtoinfo.js';
function ProdutoInfo(){
    return(
        <div className="produto-infor">
            <div className="linha1"></div>
            <ul>
            <li className="pri1">
                <div className="linha2"></div>
    <button onclick={funcDes}className="des">DESCRIÇÃO</button>
            </li>
            <li className="pri2">
                <div className="linha3"></div>
   <button onclick={funcInf}className="infad">INFORMAÇÃO ADICIONAL</button>
            </li>
        </ul>
               <div className="descricao1">
                <p>
                <strong>   Dimensões da caixa de 5 gavetas<br/></strong> 
24 x 22 x 50 ou 60 cm de comprimento dimensões útil do produto <br/><br/><br/>
Disponível nas cores preto laranja cinza azul amarelo vermelho verde<br/><br/><br/>
1 ANO DE GARANTIA<br/><br/><br/>
                </p>
                <div className="linha6"></div>
                </div>

                <div className="informacao">
                    <p id="compri">
                        COMPRIMENTO
                    </p>
                        <p id="cm">	
                            50cm, 60cm
                        </p>
                        <div className="linha4"></div>
                        <div className="linha5"></div>
                </div>
        </div>
    )
}
export default ProdutoInfo