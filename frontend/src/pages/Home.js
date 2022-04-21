import React from "react";
import Titulo from "../components/Titulo";
import Carrousel from '../components/Carrousel'
import About from '../components/About'
import Estilistas from "../components/Estilistas";
import Cartas from "../components/Cartas";
import Contactos from "../components/contactos"
import Calendario from '../components/Calendario'
import ServicesCards from "../components/ServicesCards";
import Deslogueo from '../components/iconLogeo/Deslogueo'
import { CartProvider, useCart } from "react-use-cart";
import Testimonial from "../components/Testimonial";
import BotonVales from '../components/BotonVales'
import Video from '../components/video/Video'
function Home() {

    
      



    return (
        <div>
            <Titulo />
            <About />
            <Estilistas />
            <ServicesCards />

            <Carrousel />
            <BotonVales/>
            <Cartas />
            
            <Testimonial/>
            <Contactos />
            
            <Video/>
            

           


        </div>

    )
}

export default Home;