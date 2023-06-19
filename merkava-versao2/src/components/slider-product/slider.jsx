import React from'react';
import '../../css/style.css';
import c9gvt1 from '../../fotos/cf-9gvt.jpg';
import c9gvt2 from '../../fotos/c-9gvt (2).jpeg';
import c9gvt3 from '../../fotos/c-9gvt(3.jpeg';
import cf3gvt from '../../fotos/cf-3-gvt.jpeg';
import imgCf5 from '../../fotos/cf-5gvt.jpeg';
import imgCf7 from '../../fotos/cf-7gvt.jpeg';
import c7gvtVideo from '../../fotos/video-7gvt.mp4';



import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
// Or, if you have to support IE9
import "@egjs/react-flicking/dist/flicking-inline.css";
export default () => {


  return <>
  <div className="container">
    <Flicking inputType={["touch", "mouse"]} autoResize={true} 
    align= {"prev"}  >
    
      <div className="flicking-panel nested-wide vertical">
      <a href="" className="card-btn">
      <Flicking className="Item"  bounce="0" bound={true}  autoResize={true}  nested={true}>
      
          <div className="flicking-panel">    
          <img className="imgProduct item current-item"  src={cf3gvt} >
          </img> 
            </div>

          <div className="flicking-panel title-special">Caixa de Ferramenta 3 gavetas</div>
        </Flicking>
        </a>
      </div>

      <div className="flicking-panel nested-wide vertical">
      <a href="" className="card-btn">
      <Flicking autoResize={true}  className="Item" bounce="1" bound={true} nested={true}>
      
          <div className="flicking-panel"><img className="imgProduct item current-item"  src={imgCf5} >
            </img> </div>
          <div className="flicking-panel  title-special">Caixa de Ferramenta 5 gaveta</div>
         
        </Flicking>
        </a>
      </div>
      <div className="flicking-panel nested-wide vertical">
      <a href="" className="card-btn">
      <Flicking autoResize={true}  className="Item" bounce="2" bound={true} nested={true}>
     
          <div className="flicking-panel"> 
          <img className="imgProduct item current-item"  src={imgCf7} ></img>
          </div>
          <div className="flicking-panel">
          <video className="imgProduct item current-item" controls>
              <source src={c7gvtVideo} type="video/mp4" />
              Seu Browser nao suporta este video
            </video>
          </div>
          <div className="flicking-panel title-special">Caixa de Ferramenta 7 gavetas</div>
        
          
        </Flicking>
        </a>
      </div>
      <div className="flicking-panel nested-wide vertical">
      <a href="" className="card-btn">
        
      <Flicking  autoResize={true}  className="Item" bounce="3" bound={true} nested={true}>
      
          <div className="flicking-panel"> <img className="imgProduct item current-item "  src={c9gvt1} ></img> </div>
          <div className="flicking-panel"><img className="imgProduct item current-item "  src={c9gvt2} ></img> </div>
          <div className="flicking-panel"><img className="imgProduct item current-item "  src={c9gvt3} ></img> </div>
          <div className="flicking-panel title-special">Caixa de Ferramenta 9 gavetas</div>
        </Flicking>
        </a>
      </div>
    </Flicking>
    </div>
    <a href="" className="btn-more-products"><span >Mais Produtos</span></a>
  </>
};

