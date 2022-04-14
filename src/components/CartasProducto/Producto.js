import React from "react";
// import "./Producto.css";
import imagen from "../imagenes/fondocarta.jpg";
import { FaFacebookSquare } from "react-icons/fa";

function Producto() {
  return (
<>
<div className="contenedor ">
<div className="carta-container">
      <div className="carta">
        <div className="carta-header">
          {/* <img src={imagen} /> */}
          <div>
            <p> Nombre</p>
            <p>@Nombre</p>
          </div>
        </div>
        <div className="carta-body">
          <img src={imagen} />
        </div>

        <div className="carta-footer">
        
          <i>hegliyg;fe <br/>
              vwudfuywd
          </i>
         
        </div>
    </div>   
       
      </div>

      <div className="carta-container">
      <div className="carta">
        <div className="carta-header">
          {/* <img src={imagen} /> */}
          <div>
            <p> Nombre</p>
            <p>@Nombre</p>
          </div>
        </div>
        <div className="carta-body">
          <img src={imagen} />
        </div>
        <div className="carta-footer">
          <i className="fas fa-heart"></i>
          <i className="fas fa-comment"></i>
          <i className="fas fa-bookmark"></i>
        </div>
    </div>   
       
      </div>

</div>




     
     {/* <ul className="cards">
  <li>
    <a href="" className="card">
      <img src={imagen}className="card__image" alt="" />
      <div className="card__overlay">
        <div className="card__header">
          <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <img className="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" />
          <div className="card__header-text">
            <h3 className="card__title">Jessica Parker</h3>            
            <span className="card__status">1 hour ago</span>
          </div>
        </div>
        <p className="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
      </div>
    </a>      
  </li>
  <li>
    <a href="" className="card">
      <img src="https://i.imgur.com/2DhmtJ4.jpg" className="card__image" alt="" />
      <div className="card__overlay">        
        <div className="card__header">
          <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                 
          <img className="card__thumb" src="https://i.imgur.com/sjLMNDM.png" alt="" />
          <div className="card__header-text">
            <h3 className="card__title">kim Cattrall</h3>
            <span className="card__status">3 hours ago</span>
          </div>
        </div>
        <p className="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
      </div>
    </a>
  </li>
  <li>
    <a href="" className="card">
      <img src="https://i.imgur.com/oYiTqum.jpg" className="card__image" alt="" />
      <div className="card__overlay">
        <div className="card__header">
          <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <img className="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" />
          <div className="card__header-text">
            <h3 className="card__title">Jessica Parker</h3>
            <span className="card__tagline">Lorem ipsum dolor sit amet consectetur</span>            
            <span className="card__status">1 hour ago</span>
          </div>
        </div>
        <p className="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
      </div>
    </a>
  </li>
  <li>
    <a href="" className="card">
      <img src="https://i.imgur.com/2DhmtJ4.jpg" className="card__image" alt="" />
      <div className="card__overlay">
        <div className="card__header">
          <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                 
          <img className="card__thumb" src="https://i.imgur.com/sjLMNDM.png" alt="" />
          <div className="card__header-text">
            <h3 className="card__title">kim Cattrall</h3>
            <span className="card__status">3 hours ago</span>
          </div>          
        </div>
        <p className="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
      </div>
    </a>
  </li>    
</ul> */}
       

     
    
    </>
  );
}

export default Producto;
