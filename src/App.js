// App.js
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './pages/home/Home';
import Product from './pages/product/Product';
import Info from './pages/info/Info';
import Contact from './pages/contact/Contact';
import Localization from './pages/localization/Localization';
import Navigator from './components/navigator/Navigator';
import Footer from "./components/footer/Footer";

function App() {
  return (
    <Router>
      <Navigator />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<Info />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/localization" element={<Localization />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
