import React, { useState, useEffect } from 'react';
import '../../css/style.css';
import black from '../../fotos/opção-de-cor/black.jpeg';
import blue from '../../fotos/opção-de-cor/blue.jpeg';
import red from '../../fotos/opção-de-cor/red.jpeg';
import lightGray from '../../fotos/opção-de-cor/cinzaClaro.jpg';
import graphiteGray from '../../fotos/opção-de-cor/cinzaGrafite.jpg';
export const selectedOption1 = { value: '' };

function EtapaTwo (){
  const [selectedOption1, setSelectedOption1] = useState('');
  const [arraySelecionado, setArraySelecionado] = useState([]);
  const [index, setIndex] = useState(0);

  const array1 = [black];
  const array2 = [red];
  const array3 = [blue];
  const array4 = [graphiteGray];
  const array5 = [lightGray];
  const handleSelectChange = (event) => {
    const selectedOption1 = event.target.value;
    setSelectedOption1(selectedOption1);
  };

  useEffect(() => {
    let intervalId;

    if (selectedOption1 === 'opcao1') {
      setArraySelecionado(array1);
      setIndex(0);
    } else if (selectedOption1 === 'opcao2') {
      setArraySelecionado(array2);
      setIndex(0);
    } else if (selectedOption1 === 'opcao3') {
      setArraySelecionado(array3);
      setIndex(0);
    } else if (selectedOption1 === 'opcao4') {
        setArraySelecionado(array4);
        setIndex(0);
    } else if (selectedOption1 === 'opcao5') {
        setArraySelecionado(array5);
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
  }, [selectedOption1]);


    return(
  <div className="containerEtapa">
    <h1 className="titleEtapa">Crie o seu Produto Personalizado</h1>
    <div className="opcoes">
        <label className="labelEtapa">Qual cor do Corpo vai Querer:</label>
        <select className="selectEtapa" value={selectedOption1} onChange={handleSelectChange}>
  <option value="">Selecione</option>
  <option value="opcao1">Preto</option>
  <option value="opcao2">Vermelho</option>
  <option value="opcao3">Azul</option>
  <option value="opcao4">Cinza Grafite</option>
  <option value="opcao5">Cinza Claro</option>
</select>
            </div>
            {arraySelecionado.length > 0 && (
        <div className="mainEtapa">
          <img className="fotoEtapa" src={arraySelecionado[index]} alt="Imagem" />
        </div>
      )}

            <a href="/EtapaOne"className="AnteriorEtapa"><span>Anterior</span></a>
            <a href="/EtapaThree" className="ProximoEtapa"><span>Proximo</span></a>
  </div>
    )
}
export default EtapaTwo;