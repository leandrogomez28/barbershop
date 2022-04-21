import React from "react";
import './aboutRasgado.css'
import Silla from '../imagenes/silla-barber.jpeg'
import { GiMustache } from "react-icons/gi";
import video2 from "../components/imagenes/video2 .mp4"

function About() {



    return (


        <div className="about">
            <div className="ozy_rreb"></div>
            <div className="d-flex content-about">
                {/* <div className='silla'>
                    <img src={Silla} alt="..." />
                </div> */}
                <div className="cover-container1">
            <video
              className="video2"
              src={video2}
              autoPlay
              loop
              muted
            ></video>
           
          </div>
                <div className="texto-about">

                    <h2> SOBRE NOSOTROS</h2>
                    <div className="espacio">
                            <div className="titulo-promo">
                                <h2 className="titulo-promo2">
                                    <GiMustache style={{ fontSize: "1em", marginBottom: "20px" }} />
                                </h2>
                            </div>
                        </div>
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
