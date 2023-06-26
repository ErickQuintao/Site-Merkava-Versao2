import React from 'react';
import ProdutoPrincipal from '../components/produtos/cf3/ProdutoPrincipal'
import Header from '../components/principal/header/header';
import Navegacao from '../components/nossoproduto/nav/navegação';
import ProdutoInfo from '../components/produtos/cf3/ProdutoInfo.jsx';
import Info from '../components/principal/info/info';

function CaixaFerramenta3gvt(){
    return(
        <div className="">
            <Header/>
            <Navegacao/>
            <ProdutoPrincipal/>
            <ProdutoInfo/>
            <Info/>
        </div>
    )
}
export default CaixaFerramenta3gvt;