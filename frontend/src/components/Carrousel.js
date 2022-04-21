import React from 'react'
import Barber from '../barbershopimg/uno.jpeg'
import Barber2 from '../barbershopimg/dos.jpeg'
import Barber3 from '../barbershopimg/tres.jpeg'
import Barber4 from '../barbershopimg/cuatro.jpeg'
import Barber5 from '../barbershopimg/cinco.jpeg'
import Barber6 from '../barbershopimg/seis.jpeg'
import Barber7 from '../barbershopimg/siete.jpeg'
import Barber8 from '../barbershopimg/ocho.jpeg'
import Barber9 from '../barbershopimg/nueve.jpeg'
import Barbera from '../barbershopimg/diez.jpeg'
import Barbere from '../barbershopimg/once.jpeg'
import Barberiq from '../barbershopimg/clasico.jpeg'
import Barberi from '../barbershopimg/doce.jpeg'
import Barberii from '../barbershopimg/trece.jpeg'
import Barberis from '../barbershopimg/fademedio.jpeg'
import Barberid from '../barbershopimg/fadeAlto.jpeg'
import Barbern from '../barbershopimg/fadeBajo.jpeg'
import Barberix from '../barbershopimg/degradee.jpeg'


import './carousel.css' 

function Carrousel() {

    return (

        <div className="carousel w-100 mt-5 d-flex justify-content-center">


            <div id="carouselExampleCaptions" className="carousel slide col-12" data-bs-ride="carousel">
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
                                <img src={Barber2} className="d-block w-100" alt="..." />

                            </div>
                            <div>
                                <img src={Barber3} className="d-block w-100" alt="..." />

                            </div>
                            <div>
                                <img src={Barber4} className="d-block w-100" alt="..." />

                            </div>
                        </div>
                        <div className='carousel-foot  w-100 '>
                            <div>
                                <img src={Barber5} className="d-block w-100" alt="..." />

                            </div>
                            <div>
                                <img src={Barber6} className="d-block w-100" alt="..." />

                            </div>
                            <div>
                                <img src={Barber7} className="d-block w-100" alt="..." />

                            </div>
                        </div>
                    </div>

                    <div className="carousel-item" >
                        <div className='carousel-img'>
                            <div>
                                <img src={Barber8} className="d-block w-100" alt="..." />

                            </div>
                            <div>
                                <img src={Barber9} className="d-block w-100" alt="..." />

                            </div>
                            <div>
                                <img src={Barbera} className="d-block w-100" alt="..." />

                            </div>
                            <div>
                                <img src={Barbere} className="d-block w-100" alt="..." />

                            </div>
                        </div>
                        <div className='carousel-foot  w-100 '>
                            <div>
                                <img src={Barberi} className="d-block w-100" alt="..." />

                            </div>
                            <div>
                                <img src={Barberii} className="d-block w-100" alt="..." />

                            </div>
                            <div>
                                <img src={Barberis} className="d-block w-100" alt="..." />

                            </div>
                        </div>
                    </div>
                    <div className="carousel-item" >
                        <div className='carousel-img'>
                            <div>
                                <img src={Barberid} className="d-block w-100" alt="..." />

                            </div>
                            <div>
                                <img src={Barberiq} className="d-block w-100" alt="..." />

                            </div>
                            <div>
                                <img src={Barbern} className="d-block w-100" alt="..." />

                            </div>
                            <div>
                                <img src={Barberix} className="d-block w-100" alt="..." />

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