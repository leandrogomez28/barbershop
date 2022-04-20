
import React from 'react';
import "./Navbar.css";
import { Link as LinkRouter } from 'react-router-dom';



function Navbar() {
    return (
        <>

            <details>

                <summary></summary>
                
                <nav class="menu">
                <LinkRouter to='/'>Inicio</LinkRouter>
                <LinkRouter to='/productos'>Productos</LinkRouter>
                <LinkRouter to='/signup'>Registro</LinkRouter>
                <LinkRouter to='/signin'>SignIn</LinkRouter>
                <LinkRouter to='/servicios'>inicio</LinkRouter>
                </nav>
            </details>




        </>
    )
};

export default Navbar;