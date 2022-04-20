import React from "react";
import Titulo from "../components/Titulo";
import Carrousel from '../components/Carrousel'
import About from '../components/About'
import Estilistas from "../components/Estilistas";
import Producto from "../components/CartasProducto/Producto";
import Cartas from "../components/Cartas";
import Contactos from "../components/contactos"
import Calendario from '../components/Calendario'
import LikesBarber from "../components/LikesBarber";
import ServicesCards from "../components/ServicesCards";
import Testimonial from "../components/Testimonial";

function Home(){


    return(
        <div>
            <Titulo/>
            <About/>
            <Estilistas/>
            <ServicesCards/> 
            <Carrousel/>
            <Cartas/>
            <Testimonial/>
            <Contactos/> 
            <LikesBarber/>
   </div>
        
    )
}

export default Home;