import React from 'react';
import './Home.css';
import InformationTextHome from '../../components/informationTextHome/informationTextHome';
import imgHome from '../../img/imgHome.png';
import mariaBonitaLogo from '../../img/mariaBonitaLogo.png';

function Home() {
  return (
    <div className='inicial'>

      <img className='background-image' src={imgHome} alt='Imagem de Fundo' />



      <div className='center-section'>
        <InformationTextHome
          pContent='Bem-vindos ao Maria Bonita, o restaurante que traz até você a autenticidade e o calor das comidas caseiras preparadas com carinho e tradição. Em nosso acolhedor ambiente, buscamos proporcionar uma experiência gastronômica única, onde cada prato é cuidadosamente elaborado para despertar memórias afetivas e sabores que remetem à comida feita em casa.'
        />
      </div>

      <img className='side-image' src={mariaBonitaLogo} alt='Imagem ao Lado' />
    </div>
  );
}

export default Home;
