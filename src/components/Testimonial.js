
import React from 'react'
import Logo from '../components/logo.jpeg';
import './Testimonial.css'

function Carrousel() {
    return (
        
         <div class="content-slider col-12">
             <div className='content-text'>
                 <h1>Testimonios</h1>
                 {/* <img src={Logo} alt=" "/> */}
             <div class="slider">
                 <div class="mask">
                     <ul>
                         <li class="anim1">
                             <div class="quote">“ Peluquerias hay muchas pero esta es especial.Puedes venir a reirte hasta la saciedad y a que te mimen...."</div>
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