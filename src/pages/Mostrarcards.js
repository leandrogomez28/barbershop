import React, { useEffect } from "react";
import "../components/Mostrarcards.css";
import imagenprueba from "../imagenes/barber.jpeg";
import { Link as LinkRouter } from 'react-router-dom';
import { actionType } from '../reducer';
import { useStateValue } from '../StateProvider';
import axios from 'axios';
import { GiMustache } from "react-icons/gi";
import { useParams } from "react-router-dom"

import { CartProvider, useCart } from "react-use-cart";
import Coments from "../components/Coments";

function Mostrarcards() {
  const { addItem } = useCart();

  const [{ productos }, dispatch] = useStateValue()
  const { id } = useParams()
  const productosSelecionado = productos.filter((item) => item._id === id)
  console.log(productosSelecionado)

  const productos2 = [
    {
      id: 1,
      name: "Malm",
      price: 9900,
      quantity: 1
    },
    {
      id: 2,
      name: "Nordli",
      price: 16500,
      quantity: 5
    },
    {
      id: 3,
      name: "Kullen",
      price: 4500,
      quantity: 1
    },
  ];
  function carritoCargado() {
    alert("cargado")
  }
  function carrito(item) {
    addItem(item);
    carritoCargado()

  }
  return (

    <>

      {/* producto */}
      <div className="contieneCartas">
        {productosSelecionado.map(item =>
          <div>
            <div className="contiene-card2" >
              <div id="wrapper">
                <img className="productog" src={
                  process.env.PUBLIC_URL + `/productosGeneral/${item.imagen}`
                } />
              </div>
              <div className="contenido">
                <h1 className="titulo"> {item.nombre}</h1>
                <h4 className="subtitulo">{item.descripción}</h4>
                <div className="control-boton">
                  <button className="btn-boton">
                    <span className="buy-boton">Comprar</span>
                  </button>
                  <div key={item.id}>
                    <button onClick={() => carrito(item)}>Agregar al carrito</button>
                  </div>
                </div>
              </div>
            </div>
            <Coments productosSelecionado={item._id}/>
          </div>
        )}
      </div>



    </>
  );
}

export default Mostrarcards;
