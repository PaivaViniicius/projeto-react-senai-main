// Navigator.js
import React from 'react';
import { Link } from 'react-router-dom';
import './navigator.css'

const Navigator = () => {
  return (
    <nav className='navbar'>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/info">Informações</Link>
        </li>
        <li>
          <Link to="/product">Produto</Link>
        </li>
        <li>
          <Link to="/contact">Contato</Link>
        </li>
        <li>
          <Link to="/localization">Localização</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigator;
