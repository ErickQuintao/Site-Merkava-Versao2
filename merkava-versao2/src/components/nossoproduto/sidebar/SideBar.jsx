import React from 'react';
import '../../../css/style.css'
import { clickSideBar } from './sidebartwo';
function SideBar (){
    return(
        <div className="sidebar">
        <h2 className="h2-cat">CATEGORIAS DE PRODUTO</h2>
        <a // onclick={clickSideBar}
         className="catpro catpro3 cs"href="">
        Caixa Sanfonada
        </a>
        <div className="linha1"></div>
        
    </div>

    )
}
export default SideBar