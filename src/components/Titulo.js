import React from "react";
import './titulo.css'
import Logo from '../imagenes/LogoBarbershop.png'



function Titulo(){


    return(
       <div className="contenedor-1">
           <div className="d-flex justify-content-center">
           <img src={Logo} className='logo' alt="..." />

               
           </div>
           
           <div className="title">
                <h2>
                    <span className="blur">C</span>
                    <span className="blur">C</span>
                    <span className="blur">S</span>
                    <span className="">.</span>
                    <span className="style">E</span>
                    <span className="style">S</span>
                    <span className="style">T</span>
                    <span className="style">I</span>
                    <span className="style">L</span>
                    <span className="style">O</span>
                    <span className="style">S</span>
                </h2>
           </div>
           
        
       </div>

    )
}
export default Titulo;