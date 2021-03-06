import React, { useEffect } from "react";
import "./barberos.css"
import facebook from '../components/Imagen1/facebook.png'
import like2 from '../components/Imagen1/like2.png'
import twitter from '../components/Imagen1/twitter.png'
import whatsapp from '../components/Imagen1/whatsapp.png'
import instagram from '../components/Imagen1/instagram.png'
import { actionType } from '../reducer';
import { useStateValue } from '../StateProvider';
import axios from 'axios';
import Likes from './Likes'
import { GiMustache } from "react-icons/gi";
import { Link as LinkRouter } from 'react-router-dom';


function Estilista() {
  const [{ barberos }, dispatch] = useStateValue()

  useEffect(() => {
    axios.get("https://css-estilos.herokuapp.com/api/barberos")
      .then(response => {
        dispatch({
          type: actionType.BARBEROSDB,
          barberos: response.data.response.barberos
        })

      })
  }, [])


       

  return (

    <div >
      <div className="estilistas-title">
      <h1>STAFF PROFESIONAL</h1>
      <div className="espacio">
                            <div className="titulo-promo">
                                <h2 className="titulo-promo2">
                                    <GiMustache style={{ fontSize: "1em", marginBottom: "20px" }} />
                                </h2>
                            </div>
                        </div>
      </div>


    
    <div className="barber">
      {barberos?.map((item) => {
        return (

          <aside class="profile-card">

         {/* <Likes likes={item.likes} id={item._id}/> */}

            <header>

              {/* <!-- here’s the avatar --> */}
              <a href="https://tutsplus.com">
              <img src={process.env.PUBLIC_URL +`/barberosGaleria/${item.img}`}/>
              </a>
              <div className="like-style">
              <Likes likes={item.likes} id={item._id}/>
              </div>
              {/* <!-- the username --> */}
              <h1>{item.nombre} {item.apellido}</h1>

              {/* <!-- and role or location --> */}
              <h2>- {item.especialidad} -</h2>

            </header>

            {/* <!-- bit of a bio; who are you? --> */}
            <div class="profile-bio">
              <div className="turno">
            <LinkRouter  to='/turnos' class="bn39"><span class="bn39span" >Turnos</span></LinkRouter>
            </div>
            <div className="resumen">
              <p>{item.reseña}</p>
              </div>
            </div>

            {/* <!-- some social links to show off --> */}
            <ul class="profile-social-links">

              {/* <!-- twitter - el clásico  --> */}
              <li>
                {/* <a href="https://twitter.com/tutsplus">
                  <img src={like2} />
                </a> */}

           

              </li>

              {/* <!-- envato – use this one to link to your marketplace profile --> */}
              <li>
                <a href="https://envato.com">
                  <img src={instagram} />
                </a>
              </li>

              {/* <!-- codepen - your codepen profile--> */}
              <li>
                <a href="https://codepen.io/tutsplus">
                  <img src={whatsapp} />
                </a>
              </li>

              {/* <!-- add or remove social profiles as you see fit --> */}
              <li>
                <a href="https://www.facebook.com/">
                  <img src={facebook} />
                </a>
              </li>
            </ul>
          </aside>

        );
      })
      }


    </div>
    </div>

  );
}

export default Estilista;
