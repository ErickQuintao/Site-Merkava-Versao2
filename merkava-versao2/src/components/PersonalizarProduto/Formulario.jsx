import React,{useState,useEffect} from 'react';
import foto1 from '../../fotos/foto-loop/WhatsApp Image 2023-07-17 at 22.27.18 (1).jpeg';
import foto2 from '../../fotos/foto-loop/WhatsApp Image 2023-07-17 at 22.27.18.jpeg';
import foto3 from '../../fotos/foto-loop/WhatsApp Image 2023-07-17 at 22.27.19 (1).jpeg';
import foto4 from '../../fotos/foto-loop/WhatsApp Image 2023-07-17 at 22.27.19.jpeg';
function Formulario (){
  const [Transformer, setTransformer] = useState('');
  const [Transformer1, setTransformer1] = useState('');
  const [Transformer2, setTransformer2] = useState('');
  const [Transformer3, setTransformer3] = useState('');  
  const [Transformer4, setTransformer4] = useState('');
//Etapa 1 functions 
const [selectedOption, setSelectedOption] = useState('');
const handleSelectChange = (event) => {
  const selectedOption = event.target.value;
  if (selectedOption === "opcao1") {
    setTransformer('9 GAVETAS');
  } else if (selectedOption === "opcao2") {
    setTransformer('7 GAVETAS');
  } else if (selectedOption === "opcao3") {
    setTransformer('5 GAVETAS');
  }
  setSelectedOption(selectedOption);
};
  //Etapa2 functions
  const [selectedOption1, setSelectedOption1] = useState('');
   const handleSelectChange1 = (event) => {
    const selectedOption1 = event.target.value;
    if (selectedOption1 === "opcao1") {
      setTransformer1('0.75')
    } else if (selectedOption1 === "opcao2") {
      setTransformer1('0.90')
    }
    setSelectedOption1(selectedOption1);
  };
  //Etapa3 functions
const [selectedOption2, setSelectedOption2] = useState('');
 const handleSelectChange2 = (event) => {
  const selectedOption2 = event.target.value;
  if (selectedOption2 === "opcao1") {
    setTransformer2('500mm')
  } else if (selectedOption2 === "opcao2") {
    setTransformer2('550mm')
   } else if (selectedOption2 === "opcao3") {
      setTransformer2('600mm')
    } else if (selectedOption2 === "opcao4") {
        setTransformer2('650mm')
  }
  setSelectedOption2(selectedOption2);
};
//Etapa 4 functions
const [selectedOption3, setSelectedOption3] = useState('');
 const handleSelectChange3 = (event) => {
  const selectedOption3 = event.target.value;
  if (selectedOption3 === "opcao1") {
    setTransformer3('Preto')
  } else if (selectedOption3 === "opcao2") {
    setTransformer3('Vermelho')
  } else if (selectedOption3 === "opcao3") {
    setTransformer3('Azul')
  } else if (selectedOption3 === "opcao4") {
    setTransformer3('Cinza Grafite')
  }else if (selectedOption3 === "opcao5") {
      setTransformer1('Cinza Claro')
  }
  setSelectedOption3(selectedOption3);
};
//Etapa5
const [selectedOption4, setSelectedOption4] = useState('');
 const handleSelectChange4 = (event) => {
  const selectedOption4 = event.target.value;
  if (selectedOption4 === "opcao1") {
    setTransformer4('Preto')
  } else if (selectedOption4 === "opcao2") {
    setTransformer4('Vermelho')
  } else if (selectedOption4 === "opcao3") {
    setTransformer4('Azul');
  } else if (selectedOption4 === "opcao4") {
    setTransformer4('Laranja');
  }else if (selectedOption4 === "opcao5") {
      setTransformer4('Verde');
  }  else if (selectedOption4 === "opcao6") {
    setTransformer4('Amarelo');
  }
  setSelectedOption4(selectedOption4);
};
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
    setValidation('Por favor, preencha o campo Nome');
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
    setValidation('Por favor, preencha o campo CPF');
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
    setValidation('Por favor, preencha o campo CEP');
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
    setValidation('Por favor, preencha o campo Uninidade');
    setVerdade3(1)
  }
}
//loop de imagem
const imgsLoops =[
 foto1,foto2,foto3,foto4
];
const [indiceImagem, setIndiceImagem] = useState(0);

useEffect(() => {
  const timeout = setTimeout(() => {
    setIndiceImagem((indice) => (indice + 1) % imgsLoops.length);
  }, 1500);

  return () => {
    clearTimeout(timeout);
  };
}, [indiceImagem]);

function gotowhatsapp() {
  let url = "https://wa.me/3189315578?text="
      + "Nome: " + NOME + "%0a"
      + "Gavetas: " + Transformer + "%0a"
      + "Tamanho da Champa: " + Transformer1 + "%0a"
      + "Cm da Caixa: " + Transformer2 + "%0a"
      + "Cor do Corpo: " +Transformer3+ "%0a"
      + "Cor da Tampa: " + Transformer4 + "%0a"
      + "CPF ou CNPJ: " + CPF + "%0a"
      + "Unidades: " + Uni + "%0a"
      + "CEP:" + CEP; 
  window.open(url, '_blank').focus();
}
  return(
<div className="container-form">
  <div className="loop-form">
  <img className="imgs-loop" src={imgsLoops[indiceImagem]} alt="Image Loop" />
  </div>
      <div className="header-form">
        <h1 className="title-form">Faça o seu Orçamento</h1>
      </div>
      <div className="divs-form">
        <div className="div-form">
        <label className="label-form">
          Quantidade de Gavetas:
        </label>
        <select  className="div-form1" value={selectedOption} onChange={handleSelectChange}>
          <option selected><span>Selecione</span></option>
          <option value="opcao1"><span>9 GAVETAS</span></option>
          <option value="opcao2"><span>7 GAVETAS</span></option>
          <option value="opcao3"><span>5 GAVETAS</span></option>
        </select>
        </div>
        <div className="div-form">
        <label className="label-form">
          Comprimento:
        </label>
        <select  className="div-form2" value={selectedOption1} onChange={handleSelectChange1}>
          <option className='option' selected><span>Selecione</span></option>
          <option value="opcao1"><span>50CM</span></option>
          <option value="opcao2"><span>55CM</span></option>
          <option value="opcao3"><span>60CM</span></option>
          <option value="opcao4"><span>65CM</span></option>
        </select>
        </div>
        <div className="div-form">
        <label className="label-form">
          Espessura da Chapa:
        </label>
        <select  className="div-form3" value={selectedOption2} onChange={handleSelectChange2}>
          <option className='option'  selected><span>Selecione</span></option>
          <option value="opcao1"><span>0.75</span></option>
          <option value="opcao2"><span>0.95</span></option>
        </select>
        </div>
        <div className="div-form">
        <label className="label-form">
          Cor do Corpo:
        </label>
        <select  className="div-form4" value={selectedOption3} onChange={handleSelectChange3}>
          <option selected><span>Selecione</span></option>
          <option value="opcao1"><span>Preto</span></option>
          <option value="opcao2"><span>Vermelho</span></option>
          <option value="opcao3"><span>Azul</span></option>
          <option value="opcao4"><span>Cinza Grafite</span></option>
          <option value="opcao5"><span>Cinaza Claro</span></option>
        </select>
        </div>
        <div className="div-form">
        <label className="label-form">
          Cor da Tampa:
        </label>
        <select  className="div-form5" value={selectedOption4} onChange={handleSelectChange4}>
          <option selected><span>Selecione</span></option>
          <option value="opcao1"><span>Preto</span></option>
          <option value="opcao2"><span>Vermelho</span></option>
          <option value="opcao3"><span>Azul</span></option>
          <option value="opcao4"><span>Laranja</span></option>
          <option value="opcao5"><span>Verde</span></option>
          <option value="opcao6"><span>Amarelo</span></option>
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
        <button className="enviar" onClick={gotowhatsapp}><span>Enviar</span></button>
   )};   
         <div className="mensagem">
           <span>{validation}</span>
         </div>
  </div>

  )
}
export default Formulario