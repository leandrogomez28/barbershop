import React from 'react'
import "./ServicesCards.css"
import Corte2 from "./ImgServices/Corte2.jpg"
import { GiMustache } from "react-icons/gi";
import { Link } from "react-router-dom";



function ServicesCards() {
    return (
        <>
            <div className="ozy_rreb"></div>
            <div className='fondo'>

                <div className='cards-services'>
                    <div className='cards-title'>
                        <h2>LO QUE HACEMOS</h2>
                        <div className="espacio">
                            <div className="titulo-promo">
                                <h2 className="titulo-promo2">
                                    <GiMustache style={{ fontSize: "1em", marginBottom: "20px" }} />
                                </h2>
                            </div>
                        </div>

                        <p>Somos un referente de la versatilidad en Barbería, tanto de la vieja escuela como de las últimas tendencias.</p>
                        <p>Nuestros profesionales te ayudarán a lucir elegante y seguro, y lo más importante con estilo.</p>
                    </div>
                    <div className="cards">
                        <div className="card">
                            <h2 className="card-title">Titulo</h2>
                            <img src={Corte2} />
                            <p className="card-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                        </div>
                        <div className="card">
                            <h2 className="card-title">Titulo</h2>
                            <img src={Corte2} />
                            <p className="card-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at</p>
                        </div>
                        <div className="card">
                            <h2 className="card-title">Titulo</h2>
                            <img src={Corte2} />
                            <p className="card-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                        </div>
                    </div>
                </div>
                <div className="cards-services-ver">
                 <Link to="/Servicios">
                <button  className='services-ver'  type="send">VER MÁS SERVICIOS</button>
                </Link>
                </div>

            </div>

          
            <div className="ozy_rret"></div>
        </>
    )
}

export default ServicesCards