import React, { useState ,useEffect} from 'react';
//Etapa1
import cf9 from  '../../fotos/c-9gvt.jpeg';
import cf7 from '../../fotos/caixaVermelho3.jpeg';
import cf5 from '../../fotos/cf-5gvt.jpeg';
import sem from '../../fotos/Bancada-900mm-4gvt.png';
//Etapa2
import chp90 from '../../fotos/tamanho-chapa/chp0-90.jpeg';
import chp75 from '../../fotos/tamanho-chapa/ch0-75.jpg';
//Etapa3
import mm500 from '../../fotos/militros/50cm.png';
import mm550 from '../../fotos/militros/55cm.png';
import mm600 from '../../fotos/militros/60cm.png';
import mm650 from '../../fotos/militros/65cm.png';
//Etapa4
import black from '../../fotos/opção-de-cor/black.jpeg';
import blue from '../../fotos/opção-de-cor/blue.jpeg';
import red from '../../fotos/opção-de-cor/red.jpeg';
import lightGray from '../../fotos/opção-de-cor/cinzaClaro.jpg';
import graphiteGray from '../../fotos/opção-de-cor/cinzaGrafite.jpg';
//Etapa5
import black1 from '../../fotos/opção-cor-tampa/black.jpg';
import blue2 from '../../fotos/opção-cor-tampa/blue.jpg';
import red3 from '../../fotos/opção-cor-tampa/red.jpg';
import green from '../../fotos/opção-cor-tampa/green.jpg';
import yellow from '../../fotos/opção-cor-tampa/yellow.jpg';
import orange from '../../fotos/opção-cor-tampa/orange.jpg';

function Formulario() {
  const [Transformer, setTransformer] = useState('');
  const [Transformer1, setTransformer1] = useState('');
  const [Transformer2, setTransformer2] = useState('');
  const [Transformer3, setTransformer3] = useState('');  
  const [Transformer4, setTransformer4] = useState('');
  //Etapa1 functions
 const [imgSelected, SetImgSelected] = useState(sem);
 const [selectedOption, setSelectedOption] = useState('');
 
  function redirectImg (src){
    SetImgSelected(src)
  }
  const handleSelectChange = (event) => {
    const selectedOption = event.target.value;
    if (selectedOption === "opcao1") {
      SetImgSelected(cf5);
      setTransformer('5 GAVETAS');
    } else if (selectedOption === "opcao2") {
      SetImgSelected(cf7);
      setTransformer('7 GAVETAS');
    } else if (selectedOption === "opcao3") {
      SetImgSelected(cf9);
      setTransformer('9 GAVETAS');
    } else {
      SetImgSelected('');
    }
    setSelectedOption(selectedOption);
  };
  //Etapa2 functions
const [imgSelected3, SetImgSelected3] = useState(sem);
const [selectedOption3, setSelectedOption3] = useState('');
 const handleSelectChange3 = (event) => {
  const selectedOption3 = event.target.value;
  if (selectedOption3 === "opcao1") {
    SetImgSelected3(chp75);
    setTransformer3('0.75')
  } else if (selectedOption3 === "opcao2") {
    SetImgSelected3(chp90);
    setTransformer3('0.90')
  } else {
    SetImgSelected3(sem);
  }
  setSelectedOption3(selectedOption3);
};
//Etapa3 functions
const [imgSelected4, SetImgSelected4] = useState(sem);
const [selectedOption4, setSelectedOption4] = useState('');
 const handleSelectChange4 = (event) => {
  const selectedOption4 = event.target.value;
  if (selectedOption4 === "opcao1") {
    SetImgSelected4(mm500);
    setTransformer4('500mm')
  } else if (selectedOption4 === "opcao2") {
    SetImgSelected4(mm550);
    setTransformer4('550mm')
   } else if (selectedOption4 === "opcao3") {
      SetImgSelected4(mm600);
      setTransformer4('600mm')
    } else if (selectedOption4 === "opcao4") {
        SetImgSelected4(mm650);
        setTransformer4('650mm')
  } else {
    SetImgSelected4(sem);
  }
  setSelectedOption4(selectedOption4);
};

//Etapa 4 functions
const [imgSelected1, SetImgSelected1] = useState(sem);
const [selectedOption1, setSelectedOption1] = useState('');
 function redirectImg1 (src){
   SetImgSelected1(src)
 }
 const handleSelectChange1 = (event) => {
  const selectedOption1 = event.target.value;
  if (selectedOption1 === "opcao1") {
    SetImgSelected1(black);
    setTransformer1('Preto')
  } else if (selectedOption1 === "opcao2") {
    SetImgSelected1(red);
    setTransformer1('Vermelho')
  } else if (selectedOption1 === "opcao3") {
    SetImgSelected1(blue);
    setTransformer1('Azul')
  } else if (selectedOption1 === "opcao4") {
    SetImgSelected1(graphiteGray);
    setTransformer1('Cinza Grafite')
  }else if (selectedOption1 === "opcao5") {
      SetImgSelected1(lightGray);
      setTransformer1('Cinza Claro')
  } else {
    SetImgSelected1(sem);
  }
  setSelectedOption1(selectedOption1);
};
//Etapa5
const [imgSelected2, SetImgSelected2] = useState(sem);
const [selectedOption2, setSelectedOption2] = useState('');
 const handleSelectChange2 = (event) => {
  const selectedOption2 = event.target.value;
  if (selectedOption2 === "opcao1") {
    SetImgSelected2(black1);
    setTransformer2('Preto')
  } else if (selectedOption2 === "opcao2") {
    SetImgSelected2(red3);
    setTransformer2('Vermelho')
  } else if (selectedOption2 === "opcao3") {
    SetImgSelected2(blue2);
    setTransformer2('Azul');
  } else if (selectedOption2 === "opcao4") {
    SetImgSelected2(orange);
    setTransformer2('Laranja');
  }else if (selectedOption2 === "opcao5") {
      SetImgSelected2(green);
      setTransformer2('Verde');
  }  else if (selectedOption2 === "opcao6") {
    SetImgSelected2(yellow);
    setTransformer2('Amarelo');
  } else {
    SetImgSelected2(sem);
  }
  setSelectedOption2(selectedOption2);
};
// EtapaEnd
//Nome
const [NOME, SetNOME] = useState();
function inputNome(event){
  let valor = event.target.value;
  SetNOME(valor)
}
//CPF
const [CPF, SetCPF] = useState();
function inputCPF(event) {
  let valor = event.target.value;
  SetCPF(valor)
}
//CEP
const [CEP, SetCEP] = useState();
function inputCep(event) {
  let valor = event.target.value;
  SetCEP(valor)
}
  //navegação entre etapas
  const [screen, setScreen] = useState(1);
  const handleStepNext = () => {
    if (screen === 1) {
      setScreen(2);
    } else if (screen === 2) {
      setScreen(3);
    } else if (screen === 3) {
      setScreen(4);
    } else if (screen === 4) {
      setScreen(5);
    }else if (screen === 5) {
      setScreen(6);
    }

  };

  const handleStepPrevious = () => {
     if (screen === 2) {
      setScreen(1);
    } else if (screen === 3) {
      setScreen(2);
    } else if (screen === 4) {
      setScreen(3);
    }else if (screen === 5) {
      setScreen(4);
    }else if (screen === 6) {
      setScreen(5);
    }

  };
//Etapa End whatsapp
function gotowhatsapp() {
  let url = "https://wa.me/3189315578?text="
      + "Nome: " + NOME + "%0a"
      + "Gavetas: " + Transformer + "%0a"
      + "Tamanho da Champa: " + Transformer3 + "%0a"
      + "Cm da Caixa: " + Transformer4 + "%0a"
      + "Cor do Corpo: " +Transformer1+ "%0a"
      + "Cor da Tampa: " + Transformer2 + "%0a"
      + "CPF ou CNPJ: " + CPF + "%0a"
      + "CEP:" + CEP;
  window.open(url, '_blank').focus();
}
  return (
    <div>
      <div className="header">
        <h2>Como deseja customizar o seu produto</h2>
      </div>
      <div className="form-container">
        <p>etapas</p>
        <form>
          <div className="main-form">
            {screen === 1 && (
              <div className="containerEtapa">
              <h1 className="titleEtapa">Crie o seu Produto Personalizado</h1>
              <div className="opcoes">
                  <label className="labelEtapa">Quantas Gavetas sua Caixa:</label>
                  <select className="selectEtapa" value={selectedOption} onChange={handleSelectChange}>
            <option value="">Selecione</option>
            <option value="opcao1" onClick={()=> redirectImg(cf5)}>5 GVT</option>
            <option value="opcao2" onClick={()=> redirectImg(cf7)}>7 GVT</option>
            <option value="opcao3" onClick={()=> redirectImg(cf9)}>9 GVT</option>
          </select>
                      </div>
                
                  <div className="mainEtapa">
                    <img className="fotoEtapa" src={imgSelected} alt="Imagem" />
                    
                  </div>
                
            </div>
            )}
             {screen === 2 && (
                      <div className="containerEtapa">
                      <h1 className="titleEtapa">Crie o seu Produto Personalizado</h1>
                      <div className="opcoes">
                          <label className="labelEtapa">Qual Tamanho da Champa que vai Querer:</label>
                          <select className="selectEtapa" value={selectedOption3} onChange={handleSelectChange3}>
                    <option value="">Selecione</option>
                    <option value="opcao1">0.75</option>
                    <option value="opcao2">0.90</option>

                  </select>
                              </div>
      
                          <div className="mainEtapa">
                            <img className="fotoEtapa" src={imgSelected3} alt="Imagem" />
                          </div>
                    </div>
            )}
            {screen === 3 &&(
              <div className="containerEtapa">
              <h1 className="titleEtapa">Crie o seu Produto Personalizado</h1>
              <div className="opcoes">
                  <label className="labelEtapa">Quantos Cm você que vai Querer:</label>
                  <select className="selectEtapa" value={selectedOption4} onChange={handleSelectChange4}>
            <option value="">Selecione</option>
            <option value="opcao1">500mm</option>
            <option value="opcao2">550mm</option>
            <option value="opcao3">600mm</option>
            <option value="opcao4">650mm</option>
          </select>
                      </div>

                  <div className="mainEtapa">
                    <img className="fotoEtapa" src={imgSelected4} alt="Imagem" />
                  </div>
            </div>
            )}
            {screen === 4 && (
               <div className="containerEtapa">
               <h1 className="titleEtapa">Crie o seu Produto Personalizado</h1>
               <div className="opcoes">
                   <label className="labelEtapa">Qual cor do Corpo vai Querer:</label>
                   <select className="selectEtapa" value={selectedOption1} onChange={handleSelectChange1}>
             <option value="">Selecione</option>
             <option value="opcao1" onClick={()=> redirectImg1(black)}>Preto</option>
             <option value="opcao2" onClick={()=> redirectImg1(red)}>Vermelho</option>
             <option value="opcao3" onClick={()=> redirectImg1(blue)}>Azul</option>
             <option value="opcao4" onClick={()=> redirectImg1(graphiteGray)}>Cinza Grafite</option>
             <option value="opcao5" onClick={()=> redirectImg1(lightGray)}>Cinza Claro</option>
           </select>
                       </div>
                   <div className="mainEtapa">
                     <img className="fotoEtapa" src={imgSelected1} alt="Imagem" />
                   </div>
                         </div>
            )}
            {screen === 5 && (
                <div className="containerEtapa">
                <h1 className="titleEtapa">Crie o seu Produto Personalizado</h1>
                <div className="opcoes">
                    <label className="labelEtapa">Qual cor do Tampa vai Querer:</label>
                    <select className="selectEtapa" value={selectedOption2} onChange={handleSelectChange2}>
              <option value="">Selecione</option>
              <option value="opcao1">Preto</option>
              <option value="opcao2">Vermelho</option>
              <option value="opcao3">Azul</option>
              <option value="opcao4">laranja</option>
              <option value="opcao5">verde</option>
              <option value="opcao6">Amerelo</option>
            </select>
                        </div>

                    <div className="mainEtapa">
                      <img className="fotoEtapa" src={imgSelected2} alt="Imagem" />
                    </div>
              </div>
            )}
           
            {screen === 6 && (
                  <div className="container-main-end">
                  <h1>Finalização</h1>
                  <div className="gavetas">
                    <span>Quantidade de Gavetas Escolhida: {Transformer}</span>
                  </div>
                  <div className="cor-corpo">
                    <span>Cor do Corpo Escolhida: {Transformer1}</span>
                  </div>
                  <div className="cor-tampa">
                    <span>Cor da Tampa Escolhida: {Transformer2}</span>
                  </div>
                  <div className="tam-caixa">
                    <span>Tamanho da Champa Escolhida: {Transformer3}</span>
                  </div>
                  <div className="cor-tampa">
                    <span>Cm da Caixa Escolhida: {Transformer4}</span>
                  </div>
                  <div className="frete">
                <span >FAÇA COTAÇÃO DO FRETE:</span>
                <input className='NOME' type='text'placeholder='NOME' onChange={(event)=>inputNome(event)}/>
    <input className='CPF' type='number'placeholder='CPF OU CPNJ' onChange={(event)=>inputCPF(event)}/>
    <input className='CEP' type='number'placeholder='CEP' onChange={(event)=>inputCep(event)}/>
                  </div>
                  <button className="AnteriorEtapa"type="button" onClick={handleStepPrevious}>
              <span>Voltar</span>
            </button>
                  <button className="btn-end"onClick={gotowhatsapp}><span>Enviar</span></button>
                </div>
            )}
          </div>
          <div className="actions">
            {screen !== 6 && (
               <button className="AnteEtapa"type="button" onClick={handleStepPrevious}>
               <span>Voltar</span>
             </button>
            )}
            {screen !== 6 &&(
              <button className="ProximoEtapa"type="button" onClick={handleStepNext}>
              <span>Avançar</span>
            </button>
            )}
            
          </div>
        </form>
      </div>
    </div>
  );
}

export default Formulario;