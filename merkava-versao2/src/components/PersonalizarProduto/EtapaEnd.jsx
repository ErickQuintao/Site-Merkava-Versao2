import React, {useState,useEffect} from 'react';
import '../../css/style.css';
import {selectedOptionValue} from './EtapaOne';
import {selectedOption1} from './EtapaTwo';
import {selectedOption2} from './EtapaThree';
import EtapaOne from './EtapaOne';
function EtapaEnd (){

    return(
        
  <div className='container-main-end'>
    <h1>Finalização</h1>
     <div className="gavetas"><span>Quantidade Gavetas Escolhida: {}</span></div>
     <div className="cor-corpo"><span>Cor do Corpo Escolhida:{}</span></div>
     <div className="cor-tampa"><span>Cor do Tampa Escolhida:{}</span></div>


     <a href="Etapathree"className="AnteriorEtapaEnd"><span>Anterior</span></a>
            <a href="" className="ProximoEtapaEnd"><span>Enviar</span></a>
  </div>
    )
}
export default EtapaEnd;
