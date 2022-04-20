
import React from 'react';
import "./Navbar.css";
import { Link as LinkRouter } from 'react-router-dom';



function Navbar() {
    return (
        <>

            <details>
                <summary></summary>
                <nav class="menu2">
                <LinkRouter to='/'>Home</LinkRouter>
                <LinkRouter to='/productos'>Productos</LinkRouter>
                <LinkRouter to='/servicios'>Servicios</LinkRouter>
                <LinkRouter to='/signup'>Registro</LinkRouter>
                <LinkRouter to='/signin'>SignIn</LinkRouter>
                <LinkRouter to='/galeria'>Galeria</LinkRouter>
                
                </nav>
            </details>




        </>
    )
};

export default Navbar;