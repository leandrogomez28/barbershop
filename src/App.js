import React from 'react';
import './App.css';
import Gallery from './components/Gallery';
 import Cartas from './components/Cartas';
import Producto from './components/CartasProducto/Producto'
// import Prueba from "./components/Prueba";

import Carrousel from './components/Carrousel'
import Titulo from './components/Titulo';
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="App">
      <Titulo/>
      <Carrousel/>
      <SignUp/>
      <Cartas/>
      <Producto/>
 </div>

  );
}

export default App;
