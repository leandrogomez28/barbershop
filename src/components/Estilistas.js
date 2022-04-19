<<<<<<< HEAD
import React from "react";
import "./barberos.css";
import facebook from "../components/Imagen1/facebook.png";
import twitter from "../components/Imagen1/twitter.png";
import whatsapp from "../components/Imagen1/whatsapp.png";
import instagram from "../components/Imagen1/instagram.png";
import LikesBarber from "./LikesBarber";
=======
import React, { useEffect } from "react";
import "./barberos.css"
import facebook from '../components/Imagen1/facebook.png'
import twitter from '../components/Imagen1/twitter.png'
import whatsapp from '../components/Imagen1/whatsapp.png'
import instagram from '../components/Imagen1/instagram.png'
import { actionType } from '../reducer';
import { useStateValue } from '../StateProvider';
import axios from 'axios';
>>>>>>> ae9832a23c78165c83e6acffac2b44a795540309

function Estilista() {
  return (
    <div className="barber">
      <aside class="profile-card">
        <header>
          {/* <!-- here’s the avatar --> */}
          <a href="https://tutsplus.com">
            <img src="https://randomuser.me/api/portraits/men/99.jpg" />
          </a>

          {/* <!-- the username --> */}
          <h1>Eder Aponte</h1>

<<<<<<< HEAD
          {/* <!-- and role or location --> */}
          <h2>- Barber Masters -</h2>
        </header>
=======
function Estilista() {
  const [{ barberos }, dispatch] = useStateValue()

  useEffect(() => {
    axios.get("http://localhost:4000/api/barberos")
      .then(response => {
        dispatch({
          type: actionType.BARBEROSDB,
          barberos: response.data.response.barberos
        })

      })
  }, [])

>>>>>>> ae9832a23c78165c83e6acffac2b44a795540309

        {/* <!-- bit of a bio; who are you? --> */}
        <div class="profile-bio">
          
        <div>
            <a class="bn39" href="/">
              <span class="bn39span">Button</span>
            </a>
          </div>

<<<<<<< HEAD
          <p>
            Emprendedor y visionario con vasta experiencia en el ramo de la
            barbería, con una audaz y llamativa propuesta en Buenos Aires de un
            estilo neoclásico que resalta su gran maestría y versatilidad en
            tijera y navajas para trabajar el cabello y la barba.
          </p>
        </div>

        {/* <!-- some social links to show off --> */}
        <ul class="profile-social-links">
          {/* <!-- twitter - el clásico  --> */}
          <li>
            <a href="https://twitter.com/tutsplus">
              <img src={twitter} />
            </a>
           
          </li>
=======
  return (

    <div className="barber">
      {barberos?.map((item) => {
        return (

          <aside class="profile-card">

            <header>

              {/* <!-- here’s the avatar --> */}
              <a href="https://tutsplus.com">
                <img src="https://randomuser.me/api/portraits/men/99.jpg" />
              </a>

              {/* <!-- the username --> */}
              <h1>{item.nombre}</h1>

              {/* <!-- and role or location --> */}
              <h2>- Barber Masters -</h2>

            </header>

            {/* <!-- bit of a bio; who are you? --> */}
            <div class="profile-bio">

              <p>Hello there!</p>
              <p>Emprendedor y visionario con vasta experiencia en el ramo de la barbería, con una audaz y llamativa propuesta en Buenos Aires
                de un estilo neoclásico que resalta su gran maestría y versatilidad en tijera y navajas para trabajar el cabello y la barba.</p>

            </div>

            {/* <!-- some social links to show off --> */}
            <ul class="profile-social-links">

              {/* <!-- twitter - el clásico  --> */}
              <li>
                <a href="https://twitter.com/tutsplus">
                  <img src={twitter} />
                </a>
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

  );
>>>>>>> ae9832a23c78165c83e6acffac2b44a795540309

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

      <aside class="profile-card">
        <header>
          {/* <!-- here’s the avatar --> */}
          <a href="https://tutsplus.com">
            <img src="https://randomuser.me/api/portraits/men/99.jpg" />
          </a>

          {/* <!-- the username --> */}
          <h1>Tomas Martinez</h1>

          {/* <!-- and role or location --> */}
          <h2>- Barber Pro -</h2>
        </header>

        {/* <!-- bit of a bio; who are you? --> */}
        <div class="profile-bio">
          <div>
            <a class="bn39" href="/">
              <span class="bn39span">Button</span>
            </a>
          </div>
          <p>
            Amplia formación y experiencia es reconocido como uno de los mejores
            y más famosos referentes en Caracas y ahora en Buenos Aires. Es
            especialista en cortes urbanos y siempre está a la vanguardia con
            los estilos más trendy.
          </p>
        </div>

        {/* <!-- some social links to show off --> */}
        <ul class="profile-social-links">
          {/* <!-- twitter - el clásico  --> */}
          <li>
            <a href="https://twitter.com/tutsplus">
              <img src={twitter} />
            </a>
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
            <a href="https://codepen.io/tutsplus">
              <img src={facebook} />
            </a>
          </li>
        </ul>
      </aside>
    </div>
  );
}

export default Estilista;
