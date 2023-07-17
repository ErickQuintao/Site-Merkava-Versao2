import React,{useState} from 'react';

function Formulario (){
//validação se todos input foram preenchidos
const [validation, setValidation] = useState('Por favor,preencha todos os campos');
let [verdade,setVerdade] = useState(1);
let [verdade1,setVerdade1] = useState(1);
let [verdade2,setVerdade2] = useState(1);
let [verdade3,setVerdade3] = useState(1);
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
//Unidades
const [Uni, SetUni] = useState();
function inputUni(event) {
  let valor = event.target.value;
  SetUni(valor)
  //validação do formulario
  event.preventDefault();
  if (Uni !== '') {
    setValidation('Concluido!Campo Unidade');
    setVerdade3(2)
 
  } else {
    setValidation('Por favor, preencha o campo Uninidade,para liberar o botão Enviar');
    setVerdade3(1)
  }
}
  return(
<div className="container-form">
  <div className="loop-form"></div>
      <div className="header-form">
        <h1 className="title-form">Faça o seu Orçamento</h1>
      </div>
      <div className="divs-form">
        <div className="div-form">
        <label className="label-form">
          Quantidade de Gavetas:
        </label>
        <select  className="div-form1">
          <option value="" selected><span>Selecione</span></option>
          <option value=""><span>9 GAVETAS</span></option>
          <option value=""><span>7 GAVETAS</span></option>
          <option value=""><span>5 GAVETAS</span></option>
        </select>
        </div>
        <div className="div-form">
        <label className="label-form">
          Comprimento:
        </label>
        <select  className="div-form2">
          <option className='option' value="" selected><span>Selecione</span></option>
          <option value=""><span>50CM</span></option>
          <option value=""><span>55CM</span></option>
          <option value=""><span>60CM</span></option>
          <option value=""><span>65CM</span></option>
        </select>
        </div>
        <div className="div-form">
        <label className="label-form">
          Espessura da Chapa:
        </label>
        <select  className="div-form3">
          <option className='option' value="" selected><span>Selecione</span></option>
          <option value=""><span>0.75</span></option>
          <option value=""><span>0.95</span></option>
        </select>
        </div>
        <div className="div-form">
        <label className="label-form">
          Cor do Corpo:
        </label>
        <select  className="div-form4">
          <option value="" selected><span>Selecione</span></option>
          <option value=""><span>Preto</span></option>
          <option value=""><span>Vermelho</span></option>
          <option value=""><span>Azul</span></option>
          <option value=""><span>Cinza Grafite</span></option>
          <option value=""><span>Cinaza Claro</span></option>
        </select>
        </div>
        <div className="div-form">
        <label className="label-form">
          Cor da Tampa:
        </label>
        <select  className="div-form5">
          <option value="" selected><span>Selecione</span></option>
          <option value=""><span>Preto</span></option>
          <option value=""><span>Vermelho</span></option>
          <option value=""><span>Azul</span></option>
          <option value=""><span>Laranja</span></option>
          <option value=""><span>Verde</span></option>
          <option value=""><span>Amarelo</span></option>
        </select>
        </div>
        <div className="div-form">
        <label className="label-form">
          Quantidade de Unidades:
        </label>
        <input onChange={(event)=>inputUni(event)}  type="number" className="div-form" />
        </div>
        <div className="div-form">
        <label className="label-form">
          CPF ou CNPJ:
        </label>
        <input onChange={(event)=>inputCPF(event)}  type="number" className="div-form" />
        </div>
        <div className="div-form">
        <label className="label-form">
          Nome:
        </label>
        <input onChange={(event)=>inputNome(event)} type="text" className="div-form" />
        </div>
        <div className="div-form">
        <label className="label-form">
          CEP:
        </label>
        <input onChange={(event)=>inputCep(event)} type="number" className="div-form" />
        </div>
      </div>
   {  verdade === 2 && verdade1 ===2 && verdade2 ===2 && verdade3 ===2&&(
        <button className="enviar"><span>Enviar</span></button>
   )};   
         <div className="mensagem">
           <span></span>
         </div>
  </div>

  )
}
export default Formulario