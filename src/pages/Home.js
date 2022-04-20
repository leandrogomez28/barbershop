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
import Cart from '../components/Carrito'

function Home() {


    return (
        <div>
            <Titulo />
            <About />
            <Estilistas />
            <ServicesCards />
            <Cartas />
            <Carrousel />
            <Contactos />
            <Deslogueo />
            <CartProvider>
                
                <Cart />
            </CartProvider>


        </div>

    )
}

export default Home;