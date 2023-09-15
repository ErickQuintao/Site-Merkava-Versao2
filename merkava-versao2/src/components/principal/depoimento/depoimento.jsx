import React from 'react';
import '../../../css/style.css';
import video1 from '../../../video/video1.mp4';
import video2 from '../../../video/video2.mp4';
import video3 from '../../../video/video3.mp4';

function Depoimento (){
    return(
<div className="depoimentos">
    <h1 className="title-depoimentos">VEJA ALGUNS DESTAQUE DE NOSSA EMPRESA</h1>
    <div className="container-dep">
    <div className="video video1">
        <video controls>
            <source src={video1} type="video/mp4"/>
            Seu navegador não suporta a reprodução de vídeo.
          </video>

        <h2 className="h2-video">TESTE DE RESISTÊNCIA</h2>
    </div>
    <div className="video video2">
        <video  controls>
        <source src={video2} type="video/mp4"/>
            Seu navegador não suporta a reprodução de vídeo.
          </video>
          <h2 className="h2-video">MOTIVOS PARA COMPRAREM NOSSAS CAIXAS</h2>
    </div>
    <div className="video video3">
        <video  controls>
        <source src={video3} type="video/mp4"/>
            Seu navegador não suporta a reprodução de vídeo.
          </video>
          <h2 className="h2-video">DESTAQUE</h2>
    </div>
</div>
</div>
    )
}
export default Depoimento;