import React from "react";
import "../components/Mostrarcards.css";
import imagenprueba from "../imagenes/barber.jpeg";

import { GiMustache } from "react-icons/gi";
function Mostrarcards() {
  return (
    
     <> 
      {/* producto */}
      <div className="contieneCartas">
        <div id="wrapper">
          <div class="dust">
            <img src="http://www.mattdrew.co.uk/experiments/images/ex-2point5d/dust.png" />
          </div>
          <div class="background">
            <img src={imagenprueba} />
          </div>
        </div>
        <div className="contenido">
          <h1 className="titulo"> hola </h1>
          <h4 className="subtitulo">subtitulo </h4>
          <div class="control">
            {/* <!-- Start Button buying --> */}
            <button class="btn">
              <span class="buy">Buy Now</span>
            </button>
            {/* <!-- End Button buying --> */}
          </div>
        </div>
      </div>
      {/* titulo */}
      <div className="encabezado">
        <h1 className="titulo">MEN’S PRODUCTS </h1>
        <h4 className="subtitulo1">
          Evolucionar el arte del aseo masculino a través de productos de
          primera calidad <br /> totalmente naturales y utilitarios.{" "}
        </h4>
        {/* linea  */}
        <div className="espacio">
          <div className="titulo-promo">
            <h2 className="titulo-promo2">
              <GiMustache style={{ fontSize: "2.5em", marginBottom: "20px" }} />
            </h2>
          </div>
        </div>
      </div>

      
    </>
  );
}

export default Mostrarcards;
