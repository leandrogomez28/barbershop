import React, { useEffect } from "react";
import { GiMustache } from "react-icons/gi";
import "../components/Mostrarservicios.css";
import { Link as LinkRouter } from "react-router-dom";
import { actionType } from "../reducer";
import { useStateValue } from "../StateProvider";
import axios from "axios";
// import "../components/ServicesCards.css";
import Corte2 from "../components/ImgServices/Corte2.jpg";
import "../components/Mostrarservicios.css";


function Mostrarservicios() {
    const [{ servicios }, dispatch] = useStateValue();
    useEffect(() => {
        window.scrollTo(0, 0);
	}, [])

    useEffect(() => {

        axios.get("http://localhost:4000/api/servicios").then((response) => {
            dispatch({
                type: actionType.SERVICIOSDB,
                servicios: response.data.response.servicios,
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
                <div className="subtitulo-mostrarS">

                    <p  >Sin dejar de lado el tradicional corte y afeitado con navaja, esta nueva era de la barbería dispone
                        de una variedad de servicios altamente especializados en cosmetología capilar y belleza masculina.</p>


                </div>
                <div className="cards">
                    {servicios.map((item) => (
                        <div className="card">

                            <h3 className="card-title">{item.nombre}</h3>
                            <img src={process.env.PUBLIC_URL + `/imgServicios/${item.imagen}`} />
                            <p className="card-desc">{item.descripcion}</p>

                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default Mostrarservicios;
