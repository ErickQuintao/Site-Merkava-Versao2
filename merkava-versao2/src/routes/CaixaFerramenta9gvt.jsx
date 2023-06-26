import React from 'react';
import '.././css/style.css';
import ProdutoPrincipal from '../components/produtos/cf9/ProdutoPrincipal'
import Header from '../components/principal/header/header';
import Navegacao from '../components/nossoproduto/nav/navegação';
import ProdutoInfo from '../components/produtos/cf9/ProdutoInfo.jsx';
import Info from '../components/principal/info/info';

function CaixaFerramenta9gvt(){
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
export default CaixaFerramenta9gvt;