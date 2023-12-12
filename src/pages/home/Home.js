import React from 'react';
import './Home.css';
import InformationTextHome from '../../components/informationTextHome/informationTextHome';
import imgHome from '../../img/imgHome.png';
import restaurante from '../../img/restaurante.jpg';

function Home() {
  return (
    <div className='inicial'>
      <img className='background-img' src={imgHome} />
      <h1>Bem-vindos ao Maria Bonita</h1>
      <div className='center-section'>
        <InformationTextHome
          pContent= 'Na nossa cozinha, celebramos as tradições culinárias nordestinas, oferecendo uma experiência autêntica. Cada prato reflete sabores únicos e histórias que destacam a alma da nossa cultura. Do suculento carne de sol às vibrantes moquecas, nosso cardápio celebra ingredientes locais e técnicas tradicionais, nutrindo não apenas o corpo, mas também a alma. Buscamos levar a autenticidade das comidas caseiras nordestinas à sua mesa, criando memórias gustativas que transportam você para as cozinhas acolhedoras das casas nordestinas. Cada garfada é uma viagem sensorial e um encontro com as tradições que tornam a culinária do Nordeste verdadeiramente única e inesquecível.'
        />
      </div>
    </div>
  );
}

export default Home;
