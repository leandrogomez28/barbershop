import React from 'react'
import Barber from '../imagenes/barber.jpeg'
import Barber2 from '../imagenes/barber2.jpg'
import Barber3 from '../imagenes/barber3.jpg'
import Barber4 from '../imagenes/barber4.jpg'
// import './carousel.css' 

function Carrousel() {

    return (

        <div className="carousel w-100 mt-5 d-flex justify-content-center">


            <div id="carouselExampleCaptions" className="carousel slide col-11" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner shadow-lg mb-5  ">
                    <div className="carousel-item active" >
                        <div className='carousel-img'>
                            <div>
                                <img src={Barber} className="d-block w-100" alt="..." />
                            
                            </div>
                            
                            <div>
                                <img src={Barber} className="d-block w-100" alt="..." />

                            </div>
                            <div>
                                <img src={Barber} className="d-block w-100" alt="..." />

                            </div>
                            <div>
                                <img src={Barber} className="d-block w-100" alt="..." />

                            </div>
                        </div>
                        <div className='carousel-foot  w-100 '>
                            <div>
                                <img src={Barber4} className="d-block w-100" alt="..." />

                            </div>
                            <div>
                                <img src={Barber4} className="d-block w-100" alt="..." />

                            </div>
                            <div>
                                <img src={Barber4} className="d-block w-100" alt="..." />

                            </div>
                        </div>
                    </div>

                    <div className="carousel-item" >
                        <div className='carousel-img'>
                            <div>
                                <img src={Barber2} className="d-block w-100" alt="..." />

                            </div>
                            <div>
                                <img src={Barber2} className="d-block w-100" alt="..." />

                            </div>
                            <div>
                                <img src={Barber2} className="d-block w-100" alt="..." />

                            </div>
                            <div>
                                <img src={Barber2} className="d-block w-100" alt="..." />

                            </div>
                        </div>
                        <div className='carousel-foot  w-100 '>
                            <div>
                                <img src={Barber4} className="d-block w-100" alt="..." />

                            </div>
                            <div>
                                <img src={Barber4} className="d-block w-100" alt="..." />

                            </div>
                            <div>
                                <img src={Barber4} className="d-block w-100" alt="..." />

                            </div>
                        </div>
                    </div>
                    <div className="carousel-item" >
                        <div className='carousel-img'>
                            <div>
                                <img src={Barber3} className="d-block w-100" alt="..." />

                            </div>
                            <div>
                                <img src={Barber3} className="d-block w-100" alt="..." />

                            </div>
                            <div>
                                <img src={Barber3} className="d-block w-100" alt="..." />

                            </div>
                            <div>
                                <img src={Barber3} className="d-block w-100" alt="..." />

                            </div>

                        </div>
                        
                    </div>


                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>





        </div>
    )
}
export default Carrousel;