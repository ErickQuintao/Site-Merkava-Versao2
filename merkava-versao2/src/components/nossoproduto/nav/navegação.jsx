import React from 'react';
import '../../../css/style.css';

function Navegacao(){
    return(
     
    <div className="catalogo">
    <a href={`/`}className="cat-ini" >INÍCIO</a>
   
    <a href={`/NossoProduto`}className="cat-cat" >CATÁLOGO</a>
   
</div>   
    )
}
export default Navegacao;