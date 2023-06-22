import React from 'react';
import '../../css/style.css';
import visao from '../../fotos/visao.png';
import missao from '../../fotos/missao.png';
import valores from '../../fotos/valores.png';
function Caracteristicas(){
    return(

        <div className="caracteristicas-empresa">
    <div className="divC visao">
        <img className="imgC imgCS" src={visao}/>
        <h3 id="titleA">VISÃO</h3>
        <p id="pc">
            Ser referência na produção e comercialização de ferramentas, que atingem a mais altas exigências dos nossos consumidores.
        </p>
    </div>
    <div className="divC missao">
        <img className="imgC" src={missao}/>
        <h3 id="titleC">MISSÃO</h3>
        <p id="pc">
            Trazer ferramentas de alta resistência, qualidade e durabilidade ao mercado, solucionando os problemas de nosso cliente.
         </p>
    </div>
    <div className="divC valores">
        <img className="imgC" src={valores}/>
        <h3 id="titleC">VALORES</h3>
        <p id="pc">
            Buscar sempre uma relação de transparência, honestidade, e respeito com o nosso cliente.
        </p>
    </div>
</div>
    )
}
export default Caracteristicas;