import React from 'react';
import whats from '../../fotos/whats-novo.gif';
function Whatsapp (){
return(
    <div>
   <a href={"https://linkwhats.app/06a04a"} target='_blank' style={{ textDecoration: 'none' }}>
   <img className='whatsNovo' src={whats}/>
   </a>
    </div>
)
}
export default Whatsapp;