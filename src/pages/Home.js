import React from "react";
import Titulo from "../components/Titulo";
import Carrousel from '../components/Carrousel'
import About from '../components/About'
import Estilistas from "../components/Estilistas";
import Producto from "../components/CartasProducto/Producto";
import Cartas from "../components/Cartas";
import Contactos from "../components/contactos";
import Calendario from '../components/Calendario';
import BotonVales from "../components/BotonVales";

function Home(){


    return(
        <div>
            <Titulo/>
            <About/>
            <Estilistas/>
            <Carrousel/>
            <Cartas/>
            <BotonVales/>
            <Contactos/>
            <Calendario/>
            
   </div>
        
    )
}

export default Home;