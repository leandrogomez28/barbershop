
import React from 'react'
import Logo from '../components/logo.jpeg';
import './Testimonial.css'
import { GiMustache } from "react-icons/gi";


function Carrousel() {
    return (
        
         <div class="content-slider ">
             <div className='content-text'>
                 <h1>TESTIMONIOS</h1>
                 <div className="espacio">
                            <div className="titulo-promo">
                                <h2 className="titulo-promo2">
                                    <GiMustache style={{ fontSize: "1em", marginBottom: "20px" }} />
                                </h2>
                            </div>
                        </div>
                 {/* <img src={Logo} alt=" "/> */}
             <div class="slider">
            
                 <div class="mask">
                     <ul>
                         <li class="anim1">
                             <div class="quote">“ Peluquerias hay muchas pero esta es especial. Puedes venir a reirte hasta la saciedad y a que te mimen...."</div>
                             <div class="source">- Leandro</div>
                         </li>
                         <li class="anim2">
                             <div class="quote">Es la única barbería que te cuenta historias y te muestra a su familia, sabiendo que lo único que sentirás es estar en casa.</div>
                             <div class="source">- Alexis</div>
                         </li>
                         <li class="anim3">
                             <div class="quote">Excelente servicio, ambiente cálido, buena música</div>
                             <div class="source">- Armando</div>
                         </li>
                         <li class="anim4">
                             <div class="quote">Atencion al cliente de 10.Excelentes barberos!</div>
                             <div class="source">- Leo</div>
                         </li>
                         <li class="anim5">
                             <div class="quote">El corte siempre es espectacular y la puntualidad!</div>
                             <div class="source">- Miguel</div>
                         </li>
                     </ul>
                 </div>
             </div>
             </div>
         </div>
    )  
}
export default Carrousel;