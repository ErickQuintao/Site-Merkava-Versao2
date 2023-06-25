import React from 'react';
import '.././css/style.css';
import ProdutoPrincipal from '../components/produtos/cf5/ProdutoPrincipal'
import Header from '../components/principal/header/header';
import Navegacao from '../components/nossoproduto/nav/navegação';
import ProdutoInfo from '../components/produtos/cf5/ProdutoInfo.jsx';

function CaixaFerramenta5gvt(){
    return(
        <div className="">
            <Header/>
            <Navegacao/>
            <ProdutoPrincipal/>
            <ProdutoInfo/>
        </div>
    )
}
export default CaixaFerramenta5gvt;