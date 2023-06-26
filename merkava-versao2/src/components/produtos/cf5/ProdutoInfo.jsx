import React, { useState }  from 'react';
import '../../../css/style.css';
function ProdutoInfo(){


        let [isDesVisible, setIsDesVisible] = useState(true);
        let [isInfVisible, setIsInfVisible] = useState(false);
      
        let handleDesClick = () => {
          setIsDesVisible(true);
          setIsInfVisible(false);
        };
      
        let handleInfClick = () => {
          setIsInfVisible(true);
          setIsDesVisible(false);
        };
    return(
        <div className="produto-infor">
            <div className="linha1"></div>
            <ul>
            <li className="pri1">
                <div className="linha2"></div>
    <button onClick={handleDesClick} className="des">DESCRIÇÃO</button>
            </li>
            <li className="pri2">
                <div className="linha3"></div>
   <button  onClick={handleInfClick} className="infad">INFORMAÇÃO ADICIONAL</button>
            </li>
        </ul>
               <div className={isDesVisible ? "descricao1" : "hidden"}>
                <p>
                <strong>   Dimensões da caixa de 5 gavetas<br/></strong> 
24 x 22 x 50 ou 60 cm de comprimento dimensões útil do produto <br/><br/><br/>
Disponível nas cores preto laranja cinza azul amarelo vermelho verde<br/><br/><br/>
1 ANO DE GARANTIA<br/><br/><br/>
                </p>
                <div className="linha6"></div>
                </div>

                <div className={isInfVisible ? "informacao" : "hidden"}>
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
export default ProdutoInfo;