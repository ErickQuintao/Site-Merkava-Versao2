import React, { useState, useEffect } from 'react';
import '../../css/style.css';
import black from '../../fotos/opção-cor-tampa/black.jpg';
import blue from '../../fotos/opção-cor-tampa/blue.jpg';
import red from '../../fotos/opção-cor-tampa/red.jpg';
import green from '../../fotos/opção-cor-tampa/green.jpg';
import yellow from '../../fotos/opção-cor-tampa/yellow.jpg';
import orange from '../../fotos/opção-cor-tampa/orange.jpg';
export const selectedOption2 = { value: '' };

function EtapaTwo (){
  const [selectedOption2, setSelectedOption2] = useState('');
  const [arraySelecionado, setArraySelecionado] = useState([]);
  const [index, setIndex] = useState(0);

  const array1 = [black];
  const array2 = [red];
  const array3 = [blue];
  const array4 =  [orange];
  const array5 = [green];
  const array6 = [yellow];
  const handleSelectChange = (event) => {
    const selectedOption2 = event.target.value;
    setSelectedOption2(selectedOption2);
  };

  useEffect(() => {
    let intervalId;

    if (selectedOption2 === 'opcao1') {
      setArraySelecionado(array1);
      setIndex(0);
    } else if (selectedOption2 === 'opcao2') {
      setArraySelecionado(array2);
      setIndex(0);
    } else if (selectedOption2 === 'opcao3') {
      setArraySelecionado(array3);
      setIndex(0);
    } else if (selectedOption2 === 'opcao4') {
        setArraySelecionado(array4);
        setIndex(0);
    } else if (selectedOption2 === 'opcao5') {
        setArraySelecionado(array5);
        setIndex(0);
    } else if (selectedOption2 === 'opcao6') {
        setArraySelecionado(array6);
        setIndex(0);
    }else {
      setArraySelecionado([]);
    }

    clearInterval(intervalId);
    if (arraySelecionado.length > 0) {
      intervalId = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % arraySelecionado.length);
      }, 1500);
    }

    return () => clearInterval(intervalId);
  }, [selectedOption2]);


    return(
  <div className="containerEtapa">
    <h1 className="titleEtapa">Crie o seu Produto Personalizado</h1>
    <div className="opcoes">
        <label className="labelEtapa">Qual cor do Tampa vai Querer:</label>
        <select className="selectEtapa" value={selectedOption2} onChange={handleSelectChange}>
  <option value="">Selecione</option>
  <option value="opcao1">Preto</option>
  <option value="opcao2">Vermelho</option>
  <option value="opcao3">Azul</option>
  <option value="opcao4">laranja</option>
  <option value="opcao5">verde</option>
  <option value="opcao6">Amerelo</option>
</select>
            </div>
            {arraySelecionado.length > 0 && (
        <div className="mainEtapa">
          <img className="fotoEtapa" src={arraySelecionado[index]} alt="Imagem" />
        </div>
      )}

            <a href="/EtapaTwo"className="AnteriorEtapa"><span>Anterior</span></a>
            <a href="/EtapaEnd" className="ProximoEtapa"><span>Proximo</span></a>
  </div>
    )
}
export default EtapaTwo;