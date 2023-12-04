import './App.css';
import { BrowserRouter as Router,Route, Link, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Product from './pages/product/Product';
import Info from './pages/info/Info';
import Contact from './pages/contact/Contact';
import Localization from './pages/localization/Localization';
import React from 'react';
import Footer from "./components/footer/Footer";

function App() {
  return (
    <Router>
      <nav className='navbar'>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/info">Informações</Link>
          </li>
          <li>
          </li>
          <li>
            <Link to="/contact">Contato</Link>
          </li>
          <li>
            <Link to="/localization">Localização</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" exact Component={Home}/>
        <Route path="/info" Component={Info}/>
        <Route path="/product" Component={Product}/>
        <Route path="/contact" Component={Contact}/>
        <Route path="/localization" Component={Localization}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
