import React,{useEffect} from "react";
import "./Cards.css"
import { Link as LinkRouter } from 'react-router-dom';
import { actionType } from '../reducer';
import { useStateValue } from '../StateProvider';
import axios from 'axios';
import { GiMustache } from "react-icons/gi";


import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Cartas() {
  const [{ productos }, dispatch] = useStateValue();

  useEffect(() => {
    axios.get("http://localhost:4000/api/productos").then((response) => {
      dispatch({
        type: actionType.PRODUCTOSDB,
        productos: response.data.response.productos,
      });
    });
  }, []);

  const mejoresProductos = productos.slice(0, 10);

  console.log(mejoresProductos);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      <div className="ozy_rreb"></div>
      <div className="product-mas">
        <h1 className="titulo"> Productos Destacados </h1>
        <div className="espacio">
                            <div className="titulo-promo">
                                <h2 className="titulo-promo2">
                                    <GiMustache style={{ fontSize: "1em", marginBottom: "20px" }} />
                                </h2>
                            </div>
                        </div>

        <Carousel responsive={responsive} draggable={true} className=" ">
          {mejoresProductos?.map((item) => (
            <div className="card-carousel ">
              <div className="card">
                <img
                  src={
                    process.env.PUBLIC_URL + `/productosGeneral/${item.imagen}`
                  }
                  className="card__image "
                />
                <div class="card__overlay">
                  <div class="card__header">
                    <svg class="card__arc" xmlns="http://www.w3.org/2000/svg">
                      <path />
                    </svg>

                    <div class="card__header-text ">
                      <h3 class="card__title">{item.nombre}</h3>
                      <span class="card__status">{item.precio}</span>
                    </div>
                  </div>

                  <div class="cards-carousel-ver">
                    <button  className="carousel-ver">
                      
                        <LinkRouter to="/productos">Ver Mas
                        <GiMustache style={{ fontSize: "2em",marginBottom:"8px" }} />
                        </LinkRouter>
                    
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      <div className="ozy_rret"></div>
    </div>
  );
}

export default Cartas;
