import React, { useEffect } from 'react';
import { actionType } from './reducer';
import { useStateValue } from './StateProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.js'
import Mostrarcards from './pages/Mostrarcards';


// import './App.css';
import Contactos from './components/contactos/index'
import SingIn from './components/signIn/SignIn';
import Gallery from './components/Gallery';
import Cartas from './components/Cartas.js';
import Producto from './components/CartasProducto/Producto.js'
// import Prueba from "./components/Prueba";
import Carrousel2 from './components/CartasProducto/Cariusel2'
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
import axios from 'axios';



function App() {
  const [{ servicios }, dispatch] = useStateValue()

  


  useEffect(() => {
    axios.get("http://localhost:4000/api/datos")
      .then(response => console.log(response))
  }, [])

  return (

    <BrowserRouter>

      <Navbar />
      <Routes>

      <Route path='/' element={<Home/>} />
      <Route path='/productos' element={<Mostrarcards/>} />

      
      </Routes>
      <FooterPage />

    </BrowserRouter>







  );
}

export default App;
