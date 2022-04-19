import React,{useEffect} from "react";
import "./Cards.css"

import { actionType } from '../reducer';
import { useStateValue } from '../StateProvider';
import axios from 'axios';



import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Cartas() {
  const [{ productos }, dispatch] = useStateValue()


  useEffect(() => {
    axios.get("http://localhost:4000/api/productos")
    .then(response => {
      dispatch({
        type: actionType.PRODUCTOSDB,
        productos: response.data.response.productos
      })

    })
}, [])

const mejoresProductos=productos.slice(0,10)

console.log(mejoresProductos)

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div>
      <div className="ozy_rreb"></div>
      <div className="product-mas">

        <Carousel responsive={responsive} draggable={true} className=' '>
        {mejoresProductos?.map(item =>
          <div className="card-carousel p-3">
         
            <div className="card">

              <img src={process.env.PUBLIC_URL +`/productosGeneral/${item.imagen}`} className="card__image " />
              <div class="card__overlay">
                <div class="card__header">
                  <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                  <img class="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" />
                  <div class="card__header-text">
                    <h3 class="card__title">Jessica Parker</h3>
                    <span class="card__status">1 hour ago</span>
                  </div>
                </div>
                <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
              </div>
            </div>
          
          </div >
      )}



        </Carousel>


      </div>
      <div className="ozy_rret"></div>




    </div>


  );
}

export default Cartas;