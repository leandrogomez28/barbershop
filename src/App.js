import React from 'react';
import './App.css';
import Gallery from './components/Gallery';
 import Cartas from './components/Cartas';
import Producto from './components/CartasProducto/Producto'
// import Prueba from "./components/Prueba";

import Carrousel from './components/Carrousel'
import Titulo from './components/Titulo';
import SignUp from './components/SignUp';

import logo from './logo.svg';
import Estilistas from './components/Estilistas.js'
// import Estilyst from './components/Estilyst.js'   esta no se va a usar
// import ValesGift from './components/ValesGift.js'


import ServicesCards from './components/ServicesCards.js'


function App() {
  return (
    <div className="App">

      <Titulo/>
      <Carrousel/>
      <SignUp/>
      <Cartas/>
      <Producto/>
      {/* <Estilyst/> Es no se va a usar */}
      {/* <ValesGift/> */}
      <Estilistas/>
      <ServicesCards/>
 </div>


  );
}

export default App;
