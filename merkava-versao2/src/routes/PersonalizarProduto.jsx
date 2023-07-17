import React from "react";
import '../css/style.css';
import Header from "../components/principal/header/header";
import Formulario from "../components/PersonalizarProduto/Formulario";
import Info from "../components/principal/info/info";

function PersonalizarProduto(){
    return(
   <div className="app-end">
    <Header/>
    <Formulario/>

   </div>
    )
}
export default PersonalizarProduto;