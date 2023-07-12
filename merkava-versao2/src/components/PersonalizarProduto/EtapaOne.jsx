import React, { useState, useEffect } from 'react';
import '../../css/style.css';
import cf9 from  '../../fotos/cf-9gvt.jpg';
import cf9dois from '../../fotos/c-9gvt (2).jpeg';
import cf9tres from '../../fotos/c-9gvt(3.jpeg';
import cf7 from '../../fotos/caixaVermelho3.jpeg';
import cf7dois from '../../fotos/caixaVermelha5.jpeg';
import cf7tres from '../../fotos/caixaVermelho4.jpeg';
import cf5 from '../../fotos/cf-5gvt.jpeg';
import cf5dois from '../../fotos/cf5-2.jpeg';
import cf5tres from '../../fotos/cf5-3.jpeg';


function EtapaOne (){
  const [selectedOption, setSelectedOption] = useState('');
  const [arraySelecionado, setArraySelecionado] = useState([]);
  const [index, setIndex] = useState(0);

  const array1 = [cf5, cf5dois,cf5tres];
  const array2 = [  cf7, cf7dois, cf7tres];
  const array3 = [  cf9, cf9dois,  cf9tres ];

const handleSelectChange = (event) => {
    const selectedOption = event.target.value;
    setSelectedOption(selectedOption);
  };

  useEffect(() => {
    let intervalId;

    if (selectedOption === 'opcao1') {
      setArraySelecionado(array1);
      setIndex(0);
    } else if (selectedOption === 'opcao2') {
      setArraySelecionado(array2);
      setIndex(0);
    } else if (selectedOption === 'opcao3') {
      setArraySelecionado(array3);
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
  }, [selectedOption]);


    return(
  <div className="containerEtapa">
    <h1 className="titleEtapa">Crie o seu Produto Personalizado</h1>
    <div className="opcoes">
        <label className="labelEtapa">Quantas Gavetas sua Caixa:</label>
        <select className="selectEtapa" value={selectedOption} onChange={handleSelectChange}>
  <option value="">Selecione</option>
  <option value="opcao1">5 GVT</option>
  <option value="opcao2">7 GVT</option>
  <option value="opcao3">9 GVT</option>
</select>
            </div>
            {arraySelecionado.length > 0 && (
        <div className="mainEtapa">
          <img className="fotoEtapa" src={arraySelecionado[index]} alt="Imagem" />
          
        </div>
      )}

            <a href="/PersonalizarProduto"className="AnteriorEtapa"><span>Anterior</span></a>
            <a href="/EtapaTwo" className="ProximoEtapa"><span>Proximo</span></a>
  </div>
    )
}
export default EtapaOne;
