import React from "react";
import "./valesGift.css"
import modelo1 from '../components/Imagen1/modelo2.jpg'
import logo1 from '../components/Imagen1/logo1.jpeg'
import { GiMustache } from "react-icons/gi";
import HeadVales from '../components/Imagen1/HeadVale.jpg'
// import ReactPlayer from 'react-player'
import minivideo1 from '../components/Imagen1/minivideo1.gif'






function Vales(){

    return(

<div className="gift">
<div className="cover-container">

{/* <div className='video-tx'>    
    <div className='vid'><ReactPlayer url='https://youtu.be/FNrq2NE4TaU' className='react-player'
          playing width='100%' height='20em' controls volume={0.1}/>
     </div>     
</div> */}

		{/* video encaezado */}
           {/* <div className="cover-container">
            <video
              className="video"
              src={minivideo1}
              autoPlay
              loop
              muted
            ></video>
           
          </div> */}
			<div className="cover-container">
			<img className="video" src={minivideo1} width={1250} height={650}/>
            </div>
			{/* <div className="nombreciudad">
              {/* <h1>{data.name}</h1> */}
            {/* </div> */} 
          </div>
<div className='gift-title'>
                    <h1>REGALA UN NUEVO LOOK</h1>
					
                    <h3>Una manera de demostrar un detalle para esa persona especial que se lo merece, es obsequiandole una Gift Card.<br/>
                    Será atendido por nuestros profesionales y le harán el cambio de look que se mecere lucir.</h3>
				{/* linea */}
				<div className="espacio">
                            <div className="titulo-promo">
                                <h2 className="titulo-promo2">
                                    <GiMustache style={{ fontSize: "1.5em", marginBottom: "20px", color:"#d6ae4c" }} />
                                </h2>
                            </div>
                        </div>
	</div>

			{/* cartas de vales  */}
<div id="container">	
	
{/* <!-- Start	Product details --> */}
	<div class="product-details">
        
        {/* <div className="imagenlogo">
        <img src={logo1} alt=""/>
        </div> */}
		
		{/* <!-- 	Product Name --> */}
	<h1>Vale para 
        "Corte de Cabello"</h1>
{/* <!-- 		<span class="hint new">New</span> -->
<!-- 		<span class="hint free-shipping">Free Shipping</span> --> */}
{/* <!-- 		the Product rating --> */}
	<span class="hint-star star">
		<i class="fa fa-star" aria-hidden="true"></i>
		<i class="fa fa-star" aria-hidden="true"></i>
		<i class="fa fa-star" aria-hidden="true"></i>
		<i class="fa fa-star-half-o" aria-hidden="true"></i>
		<i class="fa fa-star-o" aria-hidden="true"></i>
	</span>
		
	
{/* <!-- The most important information about the product --> */}

<p class="information">" Regala un corte de cabello para tu pareja, hijo o amigo en su día especial, otorgandole un tratamiento de spa. "</p>
	
		
{/* <!-- 		Control --> */}
<div class="control">
	
{/* <!-- Start Button buying --> */}
	<button class="btn">
{/* <!-- 		the Price --> */}
	 <span class="price">49 $</span>
{/* <!-- 		shopping cart icon--> */}
   <span class="shopping-cart"><i class="fa fa-shopping-cart" aria-hidden="true"></i></span>
{/* <!-- 		Buy Now / ADD to Cart--> */}
   <span class="buy">Buy Now</span>
 </button>
	{/* <!-- End Button buying --> */}
	
</div>
			
</div>
	
{/* <!-- 	End	Product details   --> */}
	
	
	
{/* <!-- 	Start product image & Information --> */}
	
<div class="product-image">
	
	<img src="https://t3.ftcdn.net/jpg/03/33/21/16/240_F_333211604_EIZfV89EslUjbsIQuLFiKOHazymsOB8T.jpg" alt="Omar Dsoky"/>
	
{/* <!-- 	product Information--> */}
<div class="info">
	<h2>The Description</h2>
	<ul>
		<li><strong>Aseado: </strong>Champu y enjuague</li>
		<li><strong>Estilo: </strong>Con tijera y/o máquina </li>
		<li><strong>Horario: </strong>9 - 11</li>
		<li><strong>Barber: </strong>Seleccionado en el establecimiento</li>
		<li><strong>Cera: </strong>Marca: XXXXXX</li>
		<li><strong>Adicional: </strong>Cerveza Premiun</li>
	</ul>
</div>
</div>
{/* <!--  End product image  --> */}


</div>

<div id="container">	
	
{/* <!-- Start	Product details --> */}
	<div class="product-details">
        
        {/* <div className="imagenlogo">
        <img src={logo1} alt=""/>
        </div> */}
		
		{/* <!-- 	Product Name --> */}
	<h1>Vale para 
        "Afeitado de Barba"</h1>
{/* <!-- 		<span class="hint new">New</span> -->
<!-- 		<span class="hint free-shipping">Free Shipping</span> --> */}
{/* <!-- 		the Product rating --> */}
	<span class="hint-star star">
		<i class="fa fa-star" aria-hidden="true"></i>
		<i class="fa fa-star" aria-hidden="true"></i>
		<i class="fa fa-star" aria-hidden="true"></i>
		<i class="fa fa-star-half-o" aria-hidden="true"></i>
		<i class="fa fa-star-o" aria-hidden="true"></i>
	</span>
		
	
{/* <!-- The most important information about the product --> */}

<p class="information">" Regala un corte para tu pareja, hijo o amigo en su día especial, otorgandole un tratamiento de spa. "</p>
	
		
{/* <!-- 		Control --> */}
<div class="control">
	
{/* <!-- Start Button buying --> */}
	<button class="btn">
{/* <!-- 		the Price --> */}
	 <span class="price">49 $</span>
{/* <!-- 		shopping cart icon--> */}
   <span class="shopping-cart"><i class="fa fa-shopping-cart" aria-hidden="true"></i></span>
{/* <!-- 		Buy Now / ADD to Cart--> */}
   <span class="buy">Buy Now</span>
 </button>
	{/* <!-- End Button buying --> */}
	
</div>
			
</div>
	
{/* <!-- 	End	Product details   --> */}
	
	
	
{/* <!-- 	Start product image & Information --> */}
	
<div class="product-image">
	
	<img src="https://t3.ftcdn.net/jpg/02/50/58/38/240_F_250583874_FO4iCFIVWLn0mPiVW3dDEor5vLUkNscS.jpg" alt="Omar Dsoky"/>
	
{/* <!-- 	product Information--> */}
<div class="info">
	<h2>The Description</h2>
	<ul>
		<li><strong>Aseado: </strong>Champu y enjuague</li>
		<li><strong>Estilo: </strong>Con tijera y/o máquina </li>
		<li><strong>Horario: </strong>9 - 11</li>
		<li><strong>Barber: </strong>Seleccionado en el establecimiento</li>
		<li><strong>Cera: </strong>Marca: XXXXXX</li>
		<li><strong>Adicional: </strong>Cerveza Premiun</li>
	</ul>
</div>
</div>
{/* <!--  End product image  --> */}


</div>

<div id="container">	
	
{/* <!-- Start	Product details --> */}
	<div class="product-details">
        
        {/* <div className="imagenlogo">
        <img src={logo1} alt=""/>
        </div> */}
		
		{/* <!-- 	Product Name --> */}
	<h1>Vale para 
        "Combo Total"</h1>
{/* <!-- 		<span class="hint new">New</span> -->
<!-- 		<span class="hint free-shipping">Free Shipping</span> --> */}
{/* <!-- 		the Product rating --> */}
	<span class="hint-star star">
		<i class="fa fa-star" aria-hidden="true"></i>
		<i class="fa fa-star" aria-hidden="true"></i>
		<i class="fa fa-star" aria-hidden="true"></i>
		<i class="fa fa-star-half-o" aria-hidden="true"></i>
		<i class="fa fa-star-o" aria-hidden="true"></i>
	</span>
		
	
{/* <!-- The most important information about the product --> */}

<p class="information">" Regala un corte para tu pareja, hijo o amigo en su día especial, otorgandole un tratamiento de spa. "</p>
	
		
{/* <!-- 		Control --> */}
<div class="control">
	
{/* <!-- Start Button buying --> */}
	<button class="btn">
{/* <!-- 		the Price --> */}
	 <span class="price">49 $</span>
{/* <!-- 		shopping cart icon--> */}
   <span class="shopping-cart"><i class="fa fa-shopping-cart" aria-hidden="true"></i></span>
{/* <!-- 		Buy Now / ADD to Cart--> */}
   <span class="buy">Buy Now</span>
 </button>
	{/* <!-- End Button buying --> */}
	
</div>
			
</div>
	
{/* <!-- 	End	Product details   --> */}
	
	
	
{/* <!-- 	Start product image & Information --> */}
	
<div class="product-image">
	
	<img src="https://t4.ftcdn.net/jpg/01/53/20/45/240_F_153204513_Ls7fGE1FgZCbjfZLYFstM6nZKTgs7dGJ.jpg" alt="Omar Dsoky"/>
	
{/* <!-- 	product Information--> */}
<div class="info">
	<h2>The Description</h2>
	<ul>
		<li><strong>Aseado: </strong>Champu y enjuague</li>
		<li><strong>Estilo: </strong>Con tijera y/o máquina </li>
		<li><strong>Horario: </strong>9 - 11</li>
		<li><strong>Barber: </strong>Seleccionado en el establecimiento</li>
		<li><strong>Cera: </strong>Marca: XXXXXX</li>
		<li><strong>Adicional: </strong>Cerveza Premiun</li>
	</ul>
</div>
</div>
{/* <!--  End product image  --> */}


</div>




</div>

    );

}

export default Vales;