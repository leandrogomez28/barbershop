import React from "react";
import './about.css'
import Silla from '../imagenes/silla-barber.jpeg'


function About() {



    return (


        <div className="about">
            <div className="ozy_rreb"></div>
            <div className="d-flex content-about">
                <div className='silla'>
                    <img src={Silla} alt="..." />
                </div>

                <div className="texto-about">

                    <h2> Sobre Nosotros</h2>
                    <hr />
                    <p>Nuestra barbería es un territorio creado exclusivamente para hombres que aprecian los más altos estándares de calidad, valoran su tiempo y la apariencia impecable. </p>

                        <p>Nuestra gama de servicios abarca muchas técnicas y procedimientos, desde el afeitado con navaja y el peinado hasta el cuidado de la barba y las cejas.</p>

                       <p> En nuestro confortable espacio, tienes la oportunidad de cuidar tu precioso cabello,  mientras bebes de nuestra exclusiva cerveza premium en compañía de buena música.</p>

                </div>
            </div>
            <div className="ozy_rret"></div>


        </div>


    )
}

export default About;