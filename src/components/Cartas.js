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
          <div className="card-carousel ">
         
            <div className="card">

              <img src={process.env.PUBLIC_URL +`/productosGeneral/${item.imagen}`} className="card__image " />
              <div class="card__overlay">
                <div class="card__header">
                  <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                  
                  <div class="card__header-text ">
                  <h3 class="card__title">{item.nombre}</h3>
                    <span class="card__status">{item.precio}</span>
                  </div>
                </div>
                
                <div class="control card__description">
            {/* <!-- Start Button buying --> */}
            <button class="btn">
              <span class="buy">Buy Now</span>
            </button>
            {/* <!-- End Button buying --> */}
          </div>
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