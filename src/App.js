import React from 'react';

// import './App.css';
import Contactos from './components/contactos/index'
import SingIn from './components/signIn/SignIn';
import Gallery from './components/Gallery';
import Cartas from './components/Cartas.js';
import Producto from './components/CartasProducto/Producto.js'
// import Prueba from "./components/Prueba";

import Carrousel from './components/Carrousel'
import Titulo from './components/Titulo';
import SignUp from './components/SignUp';


import Estilistas from './components/Estilistas.js'
// import Estilyst from './components/Estilyst.js'   esta no se va a usar
 import ValesGift from './components/ValesGift.js'
import Testimonials from './components/Testimonial'

import ServicesCards from './components/ServicesCards.js'
import FooterPage from './components/FooterPage.js'
import Navbar from './components/Navbar'


function App() {
  return (
    <div className="App">
      <Navbar/>

      <Titulo />
      <Carrousel />
      <SignUp />
      <Cartas />
      <Producto />
      {/* <Estilyst/> Es no se va a usar */}
      <ValesGift/>
      <Estilistas />
      <ServicesCards />
      <Testimonials/>
      <SingIn/>
      <Contactos></Contactos>
      <FooterPage/>
    </div>







  );
}

export default App;
