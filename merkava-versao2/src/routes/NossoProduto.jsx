import React from 'react';
import '.././css/style.css';
import Header from '.././components/principal/header/header';
import Info from '.././components/principal/info/info';
import Navegacao from '../components/nossoproduto/nav/navegação';
import SideBar from '../components/nossoproduto/sidebar/SideBar';
import Produtos from '../components/nossoproduto/produtos/produtos';
import Espaco from '../components/espaco';
import Whatsapp from '../components/whatsapp/Whatsapp';
function NossoProduto (){

return(
    <div>
      
        <Header/>
        <Navegacao/>
        <SideBar/>
        <Produtos/>
        <Espaco/>
        <Info/>
        <Whatsapp/>
   </div>
)
}
export default NossoProduto;