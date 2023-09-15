import React from 'react';
import '../../../css/style.css';
import c9gvt1 from '../../../fotos/9-gvts/WhatsApp Image 2023-09-11 at 19.24.36.jpeg';
import c9gvt2 from '../../../fotos/9-gvts/WhatsApp Image 2023-09-11 at 19.24.37.jpeg';
import c9gvt3 from '../../../fotos/9-gvts/WhatsApp Image 2023-09-11 at 19.25.47.jpeg';
import c9gvt4 from '../../../fotos/9-gvts/WhatsApp Image 2023-09-11 at 19.25.48.jpeg';
import cf3gvt from '../../../fotos/cf-3-gvt.jpeg';
import imgCf5 from '../../../fotos/cf-5gvt.jpeg';
import img2Cf5 from '../../../fotos/cf5-2.jpeg';
import img3Cf5 from '../../../fotos/cf5-3.jpeg';
import img2Cf7 from '../../../fotos/7-gvts/WhatsApp Image 2023-09-11 at 19.28.00 (1).jpeg';
import img1Cf7 from '../../../fotos/7-gvts/WhatsApp Image 2023-09-11 at 19.27.59.jpeg';
import img3Cf7 from '../../../fotos/7-gvts/WhatsApp Image 2023-09-11 at 19.28.00.jpeg';
import img4Cf7 from '../../../fotos/7-gvts/WhatsApp Image 2023-09-11 at 19.28.01 (1).jpeg';
import img5Cf7 from '../../../fotos/7-gvts/WhatsApp Image 2023-09-11 at 19.28.01.jpeg';
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
    <img className="img  flicking-panel" src={img3Cf5}/>
    <img className="img  flicking-panel" src={imgCf5}/>
    <img className="img  flicking-panel" src={img2Cf5}/>
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
    <img className="img img3 flicking-panel" src={img4Cf7}/> 
    <img className="img img3 flicking-panel" src={img5Cf7}/>
    <img className="img img3 flicking-panel" src={img1Cf7}/> 
    <img className="img img3 flicking-panel" src={img2Cf7}/> 
    <img className="img img3 flicking-panel" src={img3Cf7}/> 
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
     <img className="img img4 flicking-panel" src={c9gvt2}/>
    <img className="img img4 flicking-panel" src={c9gvt1}/>
    <img className="img img4 flicking-panel" src={c9gvt3}/>
    <img className="img img4 flicking-panel" src={c9gvt4}/>
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
    

