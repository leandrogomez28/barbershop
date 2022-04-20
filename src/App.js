import React, { useEffect } from 'react';
import { actionType } from './reducer';
import { useStateValue } from './StateProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.js'
import Mostrarcards from './pages/Mostrarcards';
import SignUp from './components/signUp/SignUp.js'
import SignIn from './components/signIn/SignIn.js';
import Calendario from './components/Calendario'

// import './App.css';
import Contactos from './components/contactos/index'

import Gallery from './components/Gallery';
import Cartas from './components/Cartas.js';
import Producto from './components/CartasProducto/Producto.js'
// import Prueba from "./components/Prueba";
import Carrousel2 from './components/CartasProducto/Cariusel2'
import Carrousel from './components/Carrousel'
import Titulo from './components/Titulo';



import Estilistas from './components/Estilistas.js'
// import Estilyst from './components/Estilyst.js'   esta no se va a usar
import ValesGift from './components/ValesGift.js'
import Testimonials from './components/Testimonial'

import ServicesCards from './components/ServicesCards.js'
import FooterPage from './components/FooterPage.js'
import Navbar from './components/Navbar'
import axios from 'axios';
import Union from './pages/Union';
import Mostrarservicios from './pages/Mostrarservicios';



function App() {
  const [{ servicios }, dispatch] = useStateValue()




  useEffect(() => {
    axios.get("http://localhost:4000/api/datos")
      .then(response => console.log(response))
    if (localStorage.getItem("token") !== null) {
      const token = localStorage.getItem("token")
      const user = axios.get("http://localhost:4000/api/signintoken", {
        headers: {
          "Authorization": "Bearer " + token
        }
      })

        .then(user => {
          if (user.data.success) {
            dispatch({
              type: actionType.USER,
              user: user.data.respuesta
            })
          } else {
            localStorage.removeItem("token")
          }
        })
    }

  }, [])

  return (

    <BrowserRouter>

      <Navbar />
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/productos' element={<Union />} />
        < Route path='/producto/:id' element={<Mostrarcards />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/servicios' element={<Mostrarservicios/>} />
        {/* <Route path='/turnos' element={<Calendario/>} /> */}


      </Routes>

      <FooterPage />

    </BrowserRouter>







  );
}

export default App;
