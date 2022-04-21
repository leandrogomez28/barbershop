import React from "react";
import './contacto.css'
import swal from 'sweetalert';

import { FiPhoneCall, FiMail } from "react-icons/fi";
import { RiMapPin2Line } from "react-icons/ri";
import { useStateValue } from "../../StateProvider";


export default function Contactos(params) {
    const[{user},dispatch]=useStateValue()

    function mensajeEnviado(){
       
        swal("¡Mensaje enviado!, te responderemos a la brevedad");
    }

    function iniciarSesion(){
       
        swal("DEBES INICIAR SESION");
    }
    return (
        <div className="general">




            <div className="titulo">
                <h1>CONTACTO</h1>

                <hr></hr>
                <h4 >PONGASE EN CONTACTO CON NOSOTROS</h4>
            </div>
            <div className="contactarnos">
                <div className="row">
                    <h5>CONECTATE CON NOSOTROS</h5>
                    <div className="col">
                        <p>Si tiene alguna pregunta, comentario o le gustaría saber sobre la reserva, no dude en enviar un mensaje y nos pondremos en contacto con usted.</p>
                    </div>
                    <div className="iconos">
                        <div className="iconosText">
                            <RiMapPin2Line className="icono"></RiMapPin2Line>  <a href="https://goo.gl/maps/TpDa9xHpZkorLoSY7" target="_blank">Paraguay 758 CABA</a>
                        </div>
                        <div className="iconosText">
                            <FiPhoneCall className="icono"></FiPhoneCall>
                            <p>11-2322-9687</p>
                        </div>
                        <div className="iconosText">
                            <FiMail className="icono"></FiMail>
                            <a href="mailto:yourname@shaverwp.com">yourname@shaverwp.com</a>
                        </div>
                    </div>




                </div>

            </div>
            <div className="formulario">
                <form>
                    <div className="row">
                        <h5>ESCRIBANOS</h5>

                        <div className="col">
                            <input type="text" className="form-control" placeholder="NOMBRE (REQUERIDO)" aria-label="First name" />
                        </div>
                        <div className="col">
                            <input type="email" className="form-control" placeholder="EMAIL (REQUERIDO)" aria-label="email" />
                        </div>
                        <div className="col-12">
                            <input type="text" className="form-control" placeholder="ASUNTO" aria-label="asunto" />
                        </div>
                        <div className="">
                            <textarea className="form-control" placeholder="DEJANOS TU MENSAJE"></textarea>
                            {/* <label for="floatingTextarea2">DEJANOS TU MENSAJE</label> */}
                        </div>
                        {user ?
                            <div className="envio">
                                <button type="button" onClick={()=>mensajeEnviado()}>ENVIAR</button>
                            </div>
                            :
                            <div className="envio">
                                <button type="button" onClick={()=>iniciarSesion()}>ENVIAR</button>
                            </div>
                        }


                    </div>

                </form>
            </div>



        </div>


    )
}