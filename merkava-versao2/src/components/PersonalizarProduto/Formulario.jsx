import React, { useState ,useEffect} from 'react';
//Etapa1
import cf9 from  '../../fotos/c-9gvt.jpeg';
import cf7 from '../../fotos/caixaVermelho3.jpeg';
import cf5 from '../../fotos/cf-5gvt.jpeg';
import sem from '../../fotos/Bancada-900mm-4gvt.png';
//Etapa2
import chp90 from '../../fotos/tamanho-chapa/chp0-90.jpeg';
import chp75 from '../../fotos/tamanho-chapa/0-75.png';
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
//validação se todos input foram preenchidos
const [validation, setValidation] = useState('Por favor,preencha todos os campos');
let [verdade,setVerdade] = useState(1);
let [verdade1,setVerdade1] = useState(1);
let [verdade2,setVerdade2] = useState(1);
let acumulador = 0;
//Nome
const [NOME, SetNOME] = useState();
function inputNome(event){
  let valor = event.target.value;
  SetNOME(valor)
  //validação do formulario
  event.preventDefault();
  if (NOME !== '') {
    setValidation('Concluido!Campo Nome');
    setVerdade(2)
  } else {
    setValidation('Por favor, preencha o campo Nome,para liberar o botão Enviar');
    setVerdade(1)
  }
}
//CPF
const [CPF, SetCPF] = useState();
function inputCPF(event) {
  let valor = event.target.value;
  SetCPF(valor)
  //validação do formulario
  event.preventDefault();
  if ( CPF !== '') {
    setValidation('Concluido!Campo CPF');
    setVerdade1(2)
 
  } else {
    setValidation('Por favor, preencha o campo CPF,para liberar o botão Enviar');
    setVerdade1(1)
  }
}

//CEP
const [CEP, SetCEP] = useState();
function inputCep(event) {
  let valor = event.target.value;
  SetCEP(valor)
  //validação do formulario
  event.preventDefault();
  if (CEP !== '') {
    setValidation('Concluido!Campo CEP');
    setVerdade2(2)
 
  } else {
    setValidation('Por favor, preencha o campo CEP,para liberar o botão Enviar');
    setVerdade2(1)
  }
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
//Etapa End 
//whatsapp
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
      <div className="form-container">
        <form>

          <div className="main-form">
            {screen === 1 && (
              <div className="containerEtapa">
              <h1 className="titleEtapa">Crie o seu Produto Personalizado</h1>
              <div className="opcoes">
                  <label className="labelEtapa"><span>Quantas Gavetas sua Caixa:</span></label>
                  <select className="selectEtapa" value={selectedOption} onChange={handleSelectChange}>
            <option value=""><span>Selecione</span></option>
            <option value="opcao1" onClick={()=> redirectImg(cf5)}><span>5 GVT</span></option>
            <option value="opcao2" onClick={()=> redirectImg(cf7)}><span>7 GVT</span></option>
            <option value="opcao3" onClick={()=> redirectImg(cf9)}><span>9 GVT</span></option>
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
                          <label className="labelEtapa"><span>Qual Tamanho da Champa que vai Querer:</span></label>
                          <select className="selectEtapa" value={selectedOption3} onChange={handleSelectChange3}>
                    <option value=""><span>Selecione</span></option>
                    <option value="opcao1"><span>0.75</span></option>
                    <option value="opcao2"><span>0.90</span></option>

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
              <label className="labelEtapa"><span>Quantos Cm você que vai Querer:</span></label>
                  <select className="selectEtapa" value={selectedOption4} onChange={handleSelectChange4}>
            <option value=""><span>Selecione</span></option>
            <option value="opcao1"><span>500mm</span></option>
            <option value="opcao2"><span>550mm</span></option>
            <option value="opcao3"><span>600mm</span></option>
            <option value="opcao4"><span>650mm</span></option>
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
                   <label className="labelEtapa"><span>Qual cor do Corpo vai Querer:</span></label>
                   <select className="selectEtapa" value={selectedOption1} onChange={handleSelectChange1}>
             <option value=""><span>Selecione</span></option>
             <option value="opcao1" onClick={()=> redirectImg1(black)}><span>Preto</span></option>
             <option value="opcao2" onClick={()=> redirectImg1(red)}><span>Vermelho</span></option>
             <option value="opcao3" onClick={()=> redirectImg1(blue)}><span>Azul</span></option>
             <option value="opcao4" onClick={()=> redirectImg1(graphiteGray)}><span>Cinza Grafite</span></option>
             <option value="opcao5" onClick={()=> redirectImg1(lightGray)}><span>Cinza Claro</span></option>
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
                    <label className="labelEtapa"><span>Qual cor do Tampa vai Querer:</span></label>
                    <select className="selectEtapa" value={selectedOption2} onChange={handleSelectChange2}>
              <option value=""><span>Selecione</span></option>
              <option value="opcao1"><span>Preto</span></option>
              <option value="opcao2"><span>Vermelho</span></option>
              <option value="opcao3"><span>Azul</span></option>
              <option value="opcao4"><span>Laranja</span></option>
              <option value="opcao5"><span>Verde</span></option>
              <option value="opcao6"><span>Amerelo</span></option>
            </select>
                        </div>

                    <div className="mainEtapa">
                      <img className="fotoEtapa" src={imgSelected2} alt="Imagem" />
                    </div>
              </div>
            )}
           
            {screen === 6 && (
                  <div className="container-main-end">
                  <h1>FINALIZAÇÃO DA PERSONALIZAÇÃO DO PRODUTO</h1>
                  <div className="finalizacao gavetas">
                    <span>QUANTIDADE DE GAVETAS ESCOLHIDAS: <span>{Transformer}</span></span>
                  </div>
                  <div className="finalizacao cor-corpo">
                    <span>COR DO CORPO ESCOLHIDA: <span>{Transformer1}</span></span>
                  </div>
                  <div className="finalizacao cor-tampa">
                    <span>COR DA TAMPA ESCOLHIDA: <span>{Transformer2}</span></span>
                  </div>
                  <div className="finalizacao tam-caixa">
                    <span>TAMANHO DA CHAMPA ESCOLHIDA: <span>{Transformer3}</span></span>
                  </div>
                  <div className="finalizacao cor-tampa">
                    <span>CM DA CAIXA ESCOLHIDA: <span>{Transformer4}</span></span>
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
                  {  verdade === 2 && verdade1 ===2 && verdade2 ===2 &&(
                  <button className="btn-end"onClick={gotowhatsapp}>
                    <span>Enviar</span>
                  </button>
                  ) }
                  <div className='mensagem'><span>{validation}</span></div>
                </div>
            )}
          </div>
          <div className="actions">
            {screen !== 6 && (
               <button className="AnteEtapa"type="button" onClick={handleStepPrevious}>
               <span>Voltar</span>
             </button>
            )}
            {screen !== 6  &&(
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