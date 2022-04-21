import React from "react";
import "./botonVales.css"
import modelo2 from "./Imagen1/modelo2.jpg"
import { Link as LinkRouter } from 'react-router-dom';


function Valesboton(){

    return(
<div className="cupon">
         
<div class="hover_wrap">
         


        {/* <figure class="hover5">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTls3pRf4AUC4lGZY92d5jF3cSeTcTiwbHAhQGCoqPHK1PfX-JmsvFIarkEylsgXks6Cfw&usqp=CAU" alt="이미지1"/>
            <figcaption><strong>Vales</strong></figcaption>
        </figure> */}
        <figure class="hover6">
            <img src="https://c.tenor.com/vuARQSx7T-AAAAAd/barba-beard.gif" alt="이미지1"/>
           <LinkRouter to="/valesgifts"><figcaption><strong>Vales Regalos</strong></figcaption></LinkRouter> 
        </figure>
    </div>



</div>


    );
}

export default Valesboton;