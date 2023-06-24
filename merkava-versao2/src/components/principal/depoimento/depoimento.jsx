import React from 'react';
import '../../../css/style.css';
import video1 from '../../../video/video1.mp4';
import video2 from '../../../video/video2.mp4';
import video3 from '../../../video/video3.mp4';

function Depoimento (){
    return(
<div className="depoimentos">
    <h1 className="title-depoimentos">VEJA ALGUNS DEPOIMENTOS DE NOSSOS CLIENTES</h1>
    <div className="container-dep">
    <div className="video video1">
        <video controls>
            <source src={video1} type="video/mp4"/>
            Seu navegador não suporta a reprodução de vídeo.
          </video>

        <h2 className="h2-video">Deivid Ramalho de Pitanga PR / Caixa 9 gavetas</h2>
    </div>
    <div className="video video2">
        <video  controls>
        <source src={video2} type="video/mp4"/>
            Seu navegador não suporta a reprodução de vídeo.
          </video>
          <h2 className="h2-video">Marcos de Vitória ES / Mesa Diagnóstico</h2>
    </div>
    <div className="video video3">
        <video  controls>
        <source src={video3} type="video/mp4"/>
            Seu navegador não suporta a reprodução de vídeo.
          </video>
          <h2 className="h2-video">Válber de SP / Carrinho auxiliar 3 gavetas</h2>
    </div>
</div>
</div>
    )
}
export default Depoimento;