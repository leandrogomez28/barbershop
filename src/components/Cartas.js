import React from "react";
import "./Cards.css"
import {FaFacebook} from"react-icons/fa";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Cartas (){
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
    return(
<div>
  <div className="d-flex justify-content-center col-12">
    
          <Carousel responsive={responsive} className='d-flex justify-content-center col-8 '>
        <div className="contenido-card">
            <div className="card">
                   <div className="content">
                     <div className="img">
                      <img />
                      {/* llamar foto */}
                     </div>
                     <div className="details">
                       <div className="name">Andrew Neil</div>
                       <div className="job">Price</div>
                     </div>
                     <div className="media-icons">
                       <a href="#"><FaFacebook style={{ fontSize:"2.5em"}}/></a>
                      
                     </div>
                   </div>
                  </div>
        </div>
        <div>
            <div className="card">
                   <div className="content">
                     <div className="img">
                      <img />
                      {/* llamar foto */}
                     </div>
                     <div className="details">
                       <div className="name">Andrew Neil</div>
                       <div className="job">Price</div>
                     </div>
                     <div className="media-icons">
                       <a href="#"><FaFacebook style={{ fontSize:"2.5em"}}/></a>
                      
                     </div>
                   </div>
                  </div>
        </div>
        <div>
            <div className="card">
                   <div className="content">
                     <div className="img">
                      <img />
                      {/* llamar foto */}
                     </div>
                     <div className="details">
                       <div className="name">Andrew Neil</div>
                       <div className="job">Price</div>
                     </div>
                     <div className="media-icons">
                       <a href="#"><FaFacebook style={{ fontSize:"2.5em"}}/></a>
                      
                     </div>
                   </div>
                  </div>
        </div>
        <div>
            <div className="card">
                   <div className="content">
                     <div className="img">
                      <img />
                      {/* llamar foto */}
                     </div>
                     <div className="details">
                       <div className="name">Andrew Neil</div>
                       <div className="job">Price</div>
                     </div>
                     <div className="media-icons">
                       <a href="#"><FaFacebook style={{ fontSize:"2.5em"}}/></a>
                      
                     </div>
                   </div>
                  </div>
        </div>
        <div>
            <div className="card">
                   <div className="content">
                     <div className="img">
                      <img />
                      {/* llamar foto */}
                     </div>
                     <div className="details">
                       <div className="name">Andrew Neil</div>
                       <div className="job">Price</div>
                     </div>
                     <div className="media-icons">
                       <a href="#"><FaFacebook style={{ fontSize:"2.5em"}}/></a>
                      
                     </div>
                   </div>
                  </div>
        </div>
            
        
    </Carousel>
            
  </div>
          <div className="carousel-prod">
          <div className="container-prod">
          <input type="radio" name="dot" id="one"/>
          <input type="radio" name="dot" id="two"/>
          <div className="titulo-prod">Andrew Neil</div>
          <div className="subtitulo-prod">Andrew Neil</div>
         
          <div className="main-card">
            <div className="cards">
              <div className="card">
               <div className="content">
                 <div className="img">
                  <img />
                  {/* llamar foto */}
                 </div>
                 <div className="details">
                   <div className="name">Andrew Neil</div>
                   <div className="job">Price</div>
                 </div>
                 <div className="media-icons">
                   <a href="#"><FaFacebook style={{ fontSize:"2.5em"}}/></a>
                  
                 </div>
               </div>
              </div>
              <div className="card">
               <div className="content">
                 <div className="img">
                  <img />
                 </div>
                 <div className="details">
                   <div className="name">Jasmine Carter</div>
                   <div className="job">Price</div>
                 </div>
                 <div className="media-icons">
                 <a href="#"><i style={{ fontSize:"2.5em"}}><FaFacebook/></i></a>
                   <a href="#"><i className="fab fa-twitter"></i></a>
                   <a href="#"><i className="fab fa-instagram"></i></a>
                   <a href="#"><i className="fab fa-youtube"></i></a>
                 </div>
               </div>
              </div>
              <div className="card">
               <div className="content">
                 <div className="img">
                  <img />
                 </div>
                 <div className="details">
                   <div className="name">Justin Chung</div>
                   <div className="job">Price</div>
                 </div>
                 <div className="media-icons">
                 <a href="#"><i style={{ fontSize:"2.5em"}}><FaFacebook/></i></a>
                   <a href="#"><i className="fab fa-twitter"></i></a>
                   <a href="#"><i className="fab fa-instagram"></i></a>
                   <a href="#"><i className="fab fa-youtube"></i></a>
                 </div>
               </div>
              </div>
            </div>
            <div className="cards">
              <div className="card">
               <div className="content">
                 <div className="img">
                   <img />
                 </div>
                 <div className="details">
                   <div className="name">Appolo Reef</div>
                   <div className="job">Price</div>
                 </div>
                 <div className="media-icons">
                 <a href="#"><i style={{ fontSize:"2.5em"}}><FaFacebook/></i></a>
                   <a href="#"><i className="fab fa-twitter"></i></a>
                   <a href="#"><i className="fab fa-instagram"></i></a>
                   <a href="#"><i className="fab fa-youtube"></i></a>
                 </div>
               </div>
              </div>
              <div className="card">
               <div className="content">
                 <div className="img">
                   <img />
                 </div>
                 <div className="details">
                   <div className="name">Adrina Calvo</div>
                   <div className="job">Price</div>
                 </div>
                 <div className="media-icons">
                 <a href="#"><i style={{ fontSize:"2.5em"}}><FaFacebook/></i></a>
                   <a href="#"><i className="fab fa-twitter"></i></a>
                   <a href="#"><i className="fab fa-instagram"></i></a>
                   <a href="#"><i className="fab fa-youtube"></i></a>
                 </div>
               </div>
              </div>
              <div className="card">
               <div className="content">
                 <div className="img">
                  <img />
                 </div>
                 <div className="details">
                   <div className="name">Nicole Lewis</div>
                   <div className="job">Price</div>
                 </div>
                 <div className="media-icons">
                 <a href="#"><i style={{ fontSize:"2.5em"}}><FaFacebook/></i></a>
                   <a href="#"><i className="fab fa-twitter"></i></a>
                   <a href="#"><i className="fab fa-instagram"></i></a>
                   <a href="#"><i className="fab fa-youtube"></i></a>
                 </div>
               </div>
              </div>
            </div>
          </div>
          <div className="button">
            <label for="one" className=" active one"></label>
            <label for="two" className="two"></label>
          </div>
          
        </div>
        
  
          </div>
  
      
</div>
        
 
    );
}

export default Cartas;