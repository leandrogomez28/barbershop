import React, { useEffect } from "react";
import "../components/Union.css";
import { Link as LinkRouter } from "react-router-dom";
import { actionType } from "../reducer";
import { useStateValue } from "../StateProvider";
import axios from "axios";
import { GiMustache } from "react-icons/gi";

function Union() {
  const [{ productos }, dispatch] = useStateValue();

  useEffect(() => {
    axios.get("http://localhost:4000/api/productos").then((response) => {
      dispatch({
        type: actionType.PRODUCTOSDB,
        productos: response.data.response.productos,
      });
    });
  }, []);
  return (
    <div className="union-complet">
      {/* titulo */}

      <div className="encabezado">
        <h1 className="titulo1">MEN’S PRODUCTS </h1>
        <h4 className="subtitulo1">
          Evolucionar el arte del cuidado masculino a través de productos <br />
          de primera calidad totalmente naturales.{" "}
        </h4>
        {/* linea  */}
        <div className="espacio">
          <div className="titulo-promo">
            <h2 className="titulo-promo2">
              <GiMustache style={{ fontSize: "1em", marginBottom: "20px" }} />
            </h2>
          </div>
        </div>
      </div>

      {/* carta  */}
      <div className="map-cartas">
        {productos.map((item) => (
          <div className="carta-container">
            <div className="carta">
              <div className="carta-header">
                <div>
                  <p> {item.nombre}</p>
                  <p>{item.precio}</p>
                </div>
              </div>
              <div className="carta-body">
                <img
                  src={
                    process.env.PUBLIC_URL + `/productosGeneral/${item.imagen}`
                  }
                />
              </div>
              <div className="carta-footer">
                {/* <p>{item.descripción}</p> */}
                {/* <div class="control1">
                 
                  <button class="btn1">
                    <span class="buy1">
                      <LinkRouter to={`/producto/${item._id}`}>
                        Ver Mas
                      </LinkRouter>
                    </span>
                  </button>
                  
                </div> */}
                <div className="cards-producto-ver">
                  <button className="producto-ver" >
                  <LinkRouter to={`/producto/${item._id}`}> VER MAS 
                  <GiMustache style={{ fontSize: "2em",marginBottom:"8px" }} />
                      </LinkRouter>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Union;
