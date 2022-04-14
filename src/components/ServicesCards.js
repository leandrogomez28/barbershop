import React from 'react'
import "./ServicesCards.css"
import Corte2 from "./ImgServices/Corte2.jpg"





function ServicesCards() {
    return (
        <div className='fondo'>
            <div className='cards-services'>
                <div className='cards-title'>
                    <h1>LO QUE HACEMOS</h1>
                    <h3>Somos un referente de la versatilidad en Barbería, tanto de la vieja escuela como de las últimas tendencias.</h3>
                    <h3>Nuestros profesionales te ayudarán a lucir elegante y seguro, y lo más importante con estilo.</h3>
                </div>
                <div className="cards">
                    <div className="card">
                        <h2 className="card-title">Titulo</h2>
                        <img src={Corte2} />
                        <p className="card-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                    </div>
                    <div className="card">
                        <h2 className="card-title">Titulo</h2>
                        <img src={Corte2} />
                        <p className="card-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at</p>
                    </div>
                    <div className="card">
                        <h2 className="card-title">Titulo</h2>
                        <img src={Corte2} />
                        <p className="card-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default ServicesCards