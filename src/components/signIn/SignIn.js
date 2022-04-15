import React from "react";
import './signIn.css'
import Facebook from "./Facebook/index"
import Google from "./Google/index"

export default function SingIn(params) {
    return (
        <div className="generals-sign">
            <div className="izquierda">
                {/* <img src="https://shaver.freevision.me/wp-content/uploads/2016/06/shutterstock_296116106-compressor.jpg"></img> */}
            </div>
            <div className="derecha">
                <div className="cabeza-titulo">
                    <h1 className="h1">CCS.ESTILOS</h1>
                    <h4>Ingrese a su cuenta</h4></div>
                <div className="mb-2">
                    <Facebook></Facebook>
                </div>
                <div>
                    <Google></Google>
                    </div>
                <div className="sign">
                <hr className="hr1"></hr>
                  <span>or</span>  
                <hr className="hr2"></hr>
                </div>
                
                <form >
                    <input type="email" className="form-control inputSign bg-dark " placeholder="EMAIL (REQUERIDO)" aria-label="email" />
                    <input type="password" className="form-control inputSign bg-dark" placeholder="PASSWORD (REQUERIDO)" aria-label="email" />
                    <button className="send" type="send">Ingresar</button>
                </form>
            </div>
        </div>
    )
}