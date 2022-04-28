import React, { useEffect } from 'react'
import { Link as LinkRouter } from 'react-router-dom';
import { actionType } from '../reducer';
import { useStateValue } from '../StateProvider';
import axios from 'axios';
import "./ServicesCards.css"
import Corte2 from "./ImgServices/Corte2.jpg"
import { GiMustache } from "react-icons/gi";
import { Link } from "react-router-dom";



function ServicesCards() {

    const [{ servicios }, dispatch] = useStateValue()


    useEffect(() => {
        axios.get("https://css-estilos.herokuapp.com/api/servicios")
            .then(response => {
                dispatch({
                    type: actionType.SERVICIOSDB,
                    servicios: response.data.response.servicios,
                });

            });
    }, []);


    const nuestrosServicios = servicios.slice(0, 3)


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
                        {nuestrosServicios.map((item) => (
                            <div className="card">

                                <h3 className="card-title">{item.nombre}</h3>
                                <img src={process.env.PUBLIC_URL + `/imgServicios/${item.imagen}`} />
                                <p className="card-desc">{item.descripcion}</p>

                            </div>
                        ))}
                        {/* <div className="card">
                            <h2 className="card-title">Titulo</h2>
                            <img src={Corte2} />
                            <p className="card-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at</p>
                        </div>
                        <div className="card">
                            <h2 className="card-title">Titulo</h2>
                            <img src={Corte2} />
                            <p className="card-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                        </div> */}
                    </div>
                </div>
                <div className="cards-services-ver">
                    <Link to="/Servicios">
                        <button className='services-ver' type="send">VER MÁS SERVICIOS</button>
                    </Link>
                </div>

            </div>


            <div className="ozy_rret"></div>
        </>
    )
}

export default ServicesCards