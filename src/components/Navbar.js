
import React from 'react';
import "./Navbar.css";
import { Link as LinkRouter } from 'react-router-dom';



function Navbar() {
    return (
        <>

            <details>
                
                <summary></summary>
                <nav class="menu2">
                <LinkRouter to='/'>Inicio</LinkRouter>
                <LinkRouter to='/productos'>Productos</LinkRouter>
                <LinkRouter to='/servicios'>Servicios</LinkRouter>
                <LinkRouter to='/signup'>Registro</LinkRouter>
                <LinkRouter to='/signin'>Ingresar</LinkRouter>
                <LinkRouter to='/galeria'>Galeria</LinkRouter>
                <LinkRouter to='/carrito'>Carrito</LinkRouter>
                
                </nav>
            </details>




        </>
    )
};

export default Navbar;