import React from "react";
import Titulo from "../components/Titulo";
import Carrousel from '../components/Carrousel'
import About from '../components/About'
import Estilistas from "../components/Estilistas";
import Producto from "../components/CartasProducto/Producto";
import Cartas from "../components/Cartas";
import Contactos from "../components/contactos"
import Calendario from '../components/Calendario'

import SignIn from '../components/signIn/SignIn'
import IconLogeo from '../components/iconLogeo/index'
import LikesBarber from "../components/LikesBarber";
import ServicesCards from "../components/ServicesCards";

function Home(){


    return(
        <div>
            <Titulo/>
            <About/>
            <Estilistas/>
            <ServicesCards/>
            <Cartas/>
            <Carrousel/>
            <Contactos/>
            
            
            <IconLogeo></IconLogeo>

            <Calendario/>
            
            <LikesBarber/>
   </div>
        
    )
}

export default Home;