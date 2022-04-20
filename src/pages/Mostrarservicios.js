import React, { useEffect } from "react";
import { GiMustache } from "react-icons/gi";
import "../components/Mostrarservicios.css";
import { Link as LinkRouter } from "react-router-dom";
import { actionType } from "../reducer";
import { useStateValue } from "../StateProvider";
import axios from "axios";
import "../components/ServicesCards.css";
import Corte2 from "../components/ImgServices/Corte2.jpg";


function Mostrarservicios() {
    const [{ productos }, dispatch] = useStateValue();

    useEffect(() => {

        axios.get("http://localhost:4000/api/servicios").then((response) => {
            dispatch({
                type: actionType.SERVICIOSDB,
                cities: response.data.response.servicios
            });
        });
    }, []);

    return (
        <>
            <div className="fondo-mostrarS">
                <div className="titulo-mostrarS">
                    <h2>NUESTROS SERVICIOS</h2>
                    <div className="espacio">
                        <div className="titulo-promo">
                            <h2 className="titulo-promo2">
                                <GiMustache style={{ fontSize: "2.5em", marginBottom: "20px" }} />
                            </h2>
                        </div>
                    </div>
                </div>

                <p className="subtitulo-mostrarS" >Sin dejar de lado el tradicional corte y afeitado con navaja, esta nueva era de la barbería dispone
                    de una variedad de servicios altamente especializados en cosmetología capilar y belleza masculina.</p>

                <div className="cards">
                    <div className="card">
                        <h2 className="card-title">Titulo</h2>
                        <img src={Corte2} />
                        <p className="card-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                    </div>
                    
                </div>

            </div>






        </>
    )
}
export default Mostrarservicios;
