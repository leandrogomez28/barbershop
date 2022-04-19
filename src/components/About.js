
import React from 'react';
import Corte from "./ImgServices/Corte.jpg";
import Barba from "./ImgServices/Barba.jpg"



function AboutUs() {

    return (
        <>
            <div content-aboutUs>
                <div className='title-aboutUs' >
                    <h1>SOBRE NOSOTROS</h1>
                    <div className='img-aboutUs' >
                        <div className='img-aboutUs1'>
                        <img src={Corte} />
                        </div>
                        <div className='img-aboutUs2'>
                        <img src={Barba} />
                        </div>

                    </div>

                    <div className='text-aboutUs'  >
                        <h3>
                            Nuestra barbería es un territorio creado exclusivamente para hombres que aprecian los más altos estándares de calidad, valoran su tiempo y la apariencia impecable.

                            Nuestra gama de servicios abarca muchas técnicas y procedimientos, desde el afeitado con navaja y el peinado hasta el cuidado de la barba y las cejas.

                            En nuestro confortable espacio, tienes la oportunidad de cuidar tu precioso cabello,  mientras bebes de nuestra exclusiva cerveza premium en compañía de buena música.

                        </h3>
                    </div>

                </div>

            </div>





        </>
    );



};
export default AboutUs;