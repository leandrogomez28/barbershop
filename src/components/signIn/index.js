import React from "react";
import './signIn.css'

export default function SingIn(params) {
    return (
        <div className="generals">
            <div className="izquierda">
                {/* <img src="https://shaver.freevision.me/wp-content/uploads/2016/06/shutterstock_296116106-compressor.jpg"></img> */}
            </div>
            <div className="derecha">
                <div>
                    <h1 className="h1">CCS.ESTILOS</h1>
                    <h4>Ingrese a su cuenta</h4></div>
                <div>Facebook</div>
                <div>google</div>
                <div className="sign">
                <hr className="hr"></hr>
                  <span>or</span>  
                <hr></hr>
                </div>
                
                <form >
                    <input type="email" className="form-control inputSign" placeholder="EMAIL (REQUERIDO)" aria-label="email" />
                    <input type="password" className="form-control inputSign" placeholder="PASSWORD (REQUERIDO)" aria-label="email" />
                    <button className="send" type="send">Ingresar</button>
                </form>
            </div>
        </div>
    )
}