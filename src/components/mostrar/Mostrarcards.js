import React from 'react'
import "./Mostrarcards.css"
import imagenprueba from "../imagenes/productos general/activador.png"
// import Ayudar from './Ayudar';


function Mostrarcards () {
  return (
    <>

<div className='contieneCartas'> 
<div className='img-cartas'>
<img src={imagenprueba}/>
</div>
  <div>
<h1 className='titulo'> hola </h1>
 <h4 className='subtitulo' >subtitulo </h4>
 <div class="control">
	
  {/* <!-- Start Button buying --> */}
    <button class="btn">
  {/* <!-- 		the Price --> */}
     {/* <span class="price">49 $</span> */}
  {/* <!-- 		shopping cart icon--> */}
     {/* <span class="shopping-cart"><i class="fa fa-shopping-cart" aria-hidden="true"></i></span> */}
  {/* <!-- 		Buy Now / ADD to Cart--> */}
     <span class="buy">Buy Now</span>
   </button>
    {/* <!-- End Button buying --> */}
    
  </div> 
 
  </div>

 
</div>


{/* calendario */}
{/* <Ayudar/> */}
{/* final calendario */}

<div class="slider">
    <div class="slide-track">
        <div class="slide"></div>
        <div class="slide"></div>
        <div class="slide"></div>
        <div class="slide"></div>
        <div class="slide"></div>
        <div class="slide"></div>
        <div class="slide"></div>
        <div class="slide"></div>
        <div class="slide"></div>
        <div class="slide"></div>
        <div class="slide"></div>
        <div class="slide"></div>
        <div class="slide"></div>
        <div class="slide"></div>
        <div class="slide"></div>
        <div class="slide"></div>
        <div class="slide"></div>
        <div class="slide"></div>
    </div>
</div>

    
    </>
  )
}

export default Mostrarcards;