import React, { useEffect } from "react";
import "../components/Mostrarcards.css";
import imagenprueba from "../imagenes/barber.jpeg";
import { Link as LinkRouter } from "react-router-dom";
import { actionType } from "../reducer";
import { useStateValue } from "../StateProvider";
import axios from "axios";
import { GiMustache } from "react-icons/gi";
import { useParams } from "react-router-dom";

import { CartProvider, useCart } from "react-use-cart";
import Coments from "../components/Coments";

function Mostrarcards() {
  const { addItem } = useCart();

  const [{ productos }, dispatch] = useStateValue();
  const { id } = useParams();
  const productosSelecionado = productos.filter((item) => item._id === id);
  console.log(productosSelecionado);

  const productos2 = [
    {
      id: 1,
      name: "Malm",
      price: 9900,
      quantity: 1,
    },
    {
      id: 2,
      name: "Nordli",
      price: 16500,
      quantity: 5,
    },
    {
      id: 3,
      name: "Kullen",
      price: 4500,
      quantity: 1,
    },
  ];
  function carritoCargado() {
    alert("cargado");
  }
  function carrito(item) {
    addItem(item);
    carritoCargado();
  }
  return (
    <>
      {/* producto */}
      <div className="contieneCartas">
        {productosSelecionado.map((item) => (
          <div>
            {/* cartas */}
            <div className="contiene-card2">
              {/* imagen carta descripcion */}
              <div id="wrapper">
                <img
                  className="productog"
                  src={
                    process.env.PUBLIC_URL + `/productosGeneral/${item.imagen}`
                  }
                />
              </div>
              {/* descripcion */}
              <div className="contenido">
                {/* titulo */}
                <div className="titulo">
                  <h1 className="titulo"> {item.nombre}</h1>
                </div>
                {/* precio */}
                <div>
                <h1 className="precio">$  {item.price}</h1>
                </div>

                {/* subtitulo =descripcion */}
                <div >
                  <p className="subtitulo">{item.descripción}</p>
                </div>

               

                {/* carrito */}
                <div className="mcarrito-ver" key={item.id}>
                  <button className="carrito-ver" onClick={() => carrito(item)}>
                  AGREGAR CARRITO
                  </button>
                </div>

                 {/* categoria */}
                <div >
                    <span className="categoria">Categoria: {item.categoria}</span>
                </div>
              </div>
            </div>
            <Coments productosSelecionado={item._id} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Mostrarcards;
