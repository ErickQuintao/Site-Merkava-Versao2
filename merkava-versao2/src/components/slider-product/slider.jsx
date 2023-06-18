import React from'react';
import '../../css/style.css';
import ca3gvt  from '../../fotos/CA-3gvt.jpeg'; 
import caa1gvt from "../../fotos/CAA-1gvt.jpeg";
import cf3gvt from '../../fotos/cf-3-gvt.jpeg';
import imgCf5 from '../../fotos/cf-5gvt.jpeg';
import imgCf7 from '../../fotos/cf-7gvt.jpeg';
import  ofm  from "../../fotos/OfM.jpeg";
import B900mm4gvt from '../../fotos/Bancada-900mm-4gvt.png';


import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
// Or, if you have to support IE9
import "@egjs/react-flicking/dist/flicking-inline.css";
export default () => {


  return <>
  <div className="container">
    <Flicking  >
    <div className="flicking-panel nested-wide vertical">
    <a href="" className="card-btn">
        <Flicking className="Item" bounce="0" bound={true} nested={true}>
        
          <div className="flicking-panel"> <img className="imgProduct item current-item"  src={B900mm4gvt} >
            </img>
            </div>
          <div className="flicking-panel">2.2</div>
          <div className="flicking-panel">Bancada 900mm 4 gavetas</div>
       
        </Flicking>
        </a>
      </div>

      <div className="flicking-panel nested-wide vertical">
      <a href="" className="card-btn  ofice">
      <Flicking className="Item" bounce="0" bound={true} nested={true}>
      
          <div className="flicking-panel"> <img className="imgProduct item current-item"  src={ca3gvt} >
            </img> </div>
          <div className="flicking-panel">2.2</div>
          <div className="flicking-panel">Caixa Auxiliar Aberto 3 gavetas</div>
          
           
        </Flicking>
        </a>
      </div>
      <div className="flicking-panel nested-wide vertical">
      <a href="" className="card-btn">
      <Flicking className="Item" bounce="0" bound={true} nested={true}>
     
          <div className="flicking-panel">  <img className="imgProduct item current-item"  src={caa1gvt} ></img> </div>
          <div className="flicking-panel">2.2</div>
          <div className="flicking-panel">Caixa Auxiliar Aberto 1 gavetas</div>
         
        </Flicking>
        </a>
      </div>

      <div className="flicking-panel nested-wide vertical">
      <a href="" className="card-btn">
      <Flicking className="Item" bounce="0" bound={true} nested={true}>
      
          <div className="flicking-panel">    <img className="imgProduct item current-item"  src={cf3gvt} >
            </img> </div>
          <div className="flicking-panel">2.2</div>
          <div className="flicking-panel">Caixa de Ferramenta 3 gavetas</div>
        </Flicking>
        </a>
      </div>

      <div className="flicking-panel nested-wide vertical">
      <a href="" className="card-btn">
      <Flicking className="Item" bounce="0" bound={true} nested={true}>
      
          <div className="flicking-panel"><img className="imgProduct item current-item"  src={imgCf5} >
            </img> </div>
          <div className="flicking-panel">2.2</div>
          <div className="flicking-panel">Caixa de Ferramenta 5 gaveta</div>
         
        </Flicking>
        </a>
      </div>
      <div className="flicking-panel nested-wide vertical">
      <a href="" className="card-btn">
      <Flicking className="Item" bounce="0" bound={true} nested={true}>
     
          <div className="flicking-panel"> 
          <img className="imgProduct item current-item"  src={imgCf7} ></img>
          </div>
          <div className="flicking-panel">2.2</div>
          <div className="flicking-panel">Caixa de Ferramenta 7 gavetas</div>
        
            
        </Flicking>
        </a>
      </div>
      <div className="flicking-panel nested-wide vertical">
      <a href="" className="card-btn">
        
      <Flicking className="Item" bounce="0" bound={true} nested={true}>
      
          <div className="flicking-panel"> <img className="imgProduct item current-item "  src={ofm} ></img> </div>
          <div className="flicking-panel">2.2</div>
          <div className="flicking-panel">Oficina Movel</div>
         
        </Flicking>
        </a>
      </div>
    </Flicking>
    </div>
  </>
};

