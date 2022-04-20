import React from "react";
import Titulo from "../components/Titulo";
import Carrousel from '../components/Carrousel'
import About from '../components/About'
import Estilistas from "../components/Estilistas";
import Producto from "../components/CartasProducto/Producto";
import Cartas from "../components/Cartas";
import Video from '../components/video/Video'

function Home(){


    return(
        <div>
            <Titulo/>
            <About/>
            <Video/>
            <Estilistas/>
            <Carrousel/>
            <Cartas/>
        </div>
    )
}

export default Home;