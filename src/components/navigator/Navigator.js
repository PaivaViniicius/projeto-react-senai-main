// Navigator.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfo, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons';
import logoPrincipal from "../../img/mariaIcon.png"
import './navigator.css';

const Navigator = () => {
  return (
    <nav className='navbar'>
      <ul>
      <div id='mariaIcon'>
        <img src={logoPrincipal} />
      </div>
        <li>
          <Link to="/">
            <FontAwesomeIcon icon={faHome} /> Home
          </Link>
        </li>
        <li>
          <Link to="/info">
            <FontAwesomeIcon icon={faInfo} /> Informações
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <FontAwesomeIcon icon={faPhone} /> Contato
          </Link>
        </li>
        <li>
          <Link to="/localization">
            <FontAwesomeIcon icon={faMapMarker} /> Localização
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigator;
