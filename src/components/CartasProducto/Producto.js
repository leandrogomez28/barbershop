import React from "react";
import "./Producto.css";
import imagen from "../imagenes/fondocarta.jpg";

function Producto() {
  return (


      <div className="carta">
        <div className="carta-header">
          <img src={imagen} />
          <div>
            <p> Nombre</p>
            <p>@Nombre</p>
          </div>
        </div>
        <div className="carta-body">
          <img src={imagen} />
        </div>
        <div className="carta-footer">
          <i className="fas fa-heart"></i>
          <i className="fas fa-comment"></i>
          <i className="fas fa-bookmark"></i>
        </div>
        {/* ------------------ */}
       
      </div>
   
    
  );
}

export default Producto;
