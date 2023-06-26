import React from 'react';
import '../../../css/style.css';
import c9gvt1 from '../../../fotos/cf-9gvt.jpg';
import c9gvt2 from '../../../fotos/c-9gvt (2).jpeg';
import c9gvt3 from '../../../fotos/c-9gvt(3.jpeg';
import cf3gvt from '../../../fotos/cf-3-gvt.jpeg';
import imgCf5 from '../../../fotos/cf-5gvt.jpeg';
import imgCf7 from '../../../fotos/cf-7gvt.jpeg';
import c7gvtVideo from '../../../fotos/video-7gvt.mp4';

import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
// Or, if you have to support IE9
import "@egjs/react-flicking/dist/flicking-inline.css";
export default () => {
    return <>
<div className="order">         
 <div className="cf5gvt flicking-panel nested-wide vertical">
    <Flicking inputType={["touch", "mouse"]}
    autoResize={true}  className="Item" 
    bounce="3" bound={true} nested={true}
    >
    <img className="img  flicking-panel" src={imgCf5}/>
    </Flicking> 
    <h3 id="h">CAIXA SANFONADA</h3>
    <a className="a" href={`/CaixaFerramenta5gvt`}>
        Caixa de Ferramentas 5 GVT
    </a>
 </div>

 <div className="cf7gvt flicking-panel nested-wide vertical">
  <Flicking inputType={["touch", "mouse"]}
    autoResize={true}  className="Item" 
    bounce="3" bound={true} nested={true}
    >
    <img className="img img3 flicking-panel" src={imgCf7}/> 
    <video className="img img3 flicking-panel" controls>
     <source src={c7gvtVideo} type="video/mp4" />
        Seu Browser nao suporta este video
    </video>
  </Flicking> 
    <h3 id="h">CAIXA SANFONADA</h3>
    <a className="a" href={`/CaixaFerramenta7gvt`}>
        Caixa de Ferramentas 7 GVT
    </a>
 </div>

 <div className="cf9gvt flicking-panel nested-wide vertical">
  <Flicking inputType={["touch", "mouse"]}
   autoResize={true}  className="Item" 
   bounce="3" bound={true} nested={true}>
    <img className="img img4 flicking-panel" src={c9gvt1}/>
    <img className="img img4 flicking-panel" src={c9gvt2}/>
    <img className="img img4 flicking-panel" src={c9gvt3}/>
  </Flicking>
    <h3 id="h">CAIXA SANFONADA</h3>
    <a className="a" href={`/CaixaFerramenta9gvt`}>
        Caixa de Ferramentas 9 GVT 
    </a>
</div>

<div className="cfs3gvt flicking-panel nested-wide vertical">
<Flicking inputType={["touch", "mouse"]}
 autoResize={true}  className="Item" 
 bounce="3" bound={true} nested={true}>
    <img className="img img5" src={cf3gvt}/>
</Flicking>
    <h3 id="h">CAIXA SANFONADA</h3>
    <a className="a a30" href={`/CaixaFerramenta3gvt`}>
    Caixa de Ferramentas Sanfonada <br/> 3 Gavetas
    </a>
</div>
        </div>
        </>
        };
    

