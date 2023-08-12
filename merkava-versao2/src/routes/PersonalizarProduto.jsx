import React from "react";
import '../css/style.css';
import Header from "../components/principal/header/header";
import Formulario from "../components/PersonalizarProduto/Formulario";
import Whatsapp from '../components/whatsapp/Whatsapp';

function PersonalizarProduto(){
    return(
   <div className="app-end">
    <Header/>
    <Formulario/>
    <Whatsapp/>
   </div>
    )
}
export default PersonalizarProduto;