import React from 'react';
import '.././css/style.css';
import ProdutoPrincipal from '../components/produtos/cf5/ProdutoPrincipal'
import Header from '../components/principal/header/header';
import Navegacao from '../components/nossoproduto/nav/navegação';

function CaixaFerramenta5gvt(){
    return(
        <div className="">
            <Header/>
            <Navegacao/>
            <ProdutoPrincipal/>
        </div>
    )
}
export default CaixaFerramenta5gvt;