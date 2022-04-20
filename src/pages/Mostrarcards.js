import React ,{useEffect}from "react";
import "../components/Mostrarcards.css";
import imagenprueba from "../imagenes/barber.jpeg";
import { Link as LinkRouter } from 'react-router-dom';
import { actionType } from '../reducer';
import { useStateValue } from '../StateProvider';
import axios from 'axios';
import { GiMustache } from "react-icons/gi";
import {useParams} from "react-router-dom"

function Mostrarcards() {

  const [{ productos }, dispatch] = useStateValue()
  const {id}=useParams()
const productosSelecionado=productos.filter((item) =>item._id===id)
console.log(productosSelecionado)

  return (
    
     <> 

      {/* producto */}
      <div className="contieneCartas">
        { productosSelecionado.map(item=>


        <div className="contiene-card2" >

        <div id="wrapper">
          {/* <div class="dust">
            <img src="http://www.mattdrew.co.uk/experiments/images/ex-2point5d/dust.png" />
          </div> */}
          <div class="background">
            <img src={
                    process.env.PUBLIC_URL + `/productosGeneral/${item.imagen}`
                  } />
          </div>
        </div>





        <div className="contenido">
          <h1 className="titulo"> {item.nombre}</h1>
          <h4 className="subtitulo">{item.descripción}</h4>
          <div class="control">
            
            <button class="btn">
              <span class="buy">Comprar</span>
            </button>
           
          </div>
        </div>
        </div> 
        )}
      </div>
      

      
    </>
  );
}

export default Mostrarcards;
