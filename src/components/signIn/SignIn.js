import React from "react";
import './signIn.css'

import { actionType } from "../../reducer";
import { useStateValue } from "../../StateProvider"

import Facebook from "./Facebook/index"
import Google from "./Google/index"
import axios from "axios";

export default function SignIn(params) {


    const [{ user }, dispatch] = useStateValue()

    async function logiUser(e) {
        console.log(e);

        e.preventDefault()
        const userData = {
            email: e.target[0].value,
            password: e.target[1].value
        }
        await axios.post("http://localhost:4000/api/signin", { userData })
            .then(response => {
                
                console.log(response.data);
                displayMessages(response.data)
            })

        function displayMessages(data) {
            console.log(data.success)
            if (!data.success) {
                console.log(data.error)
            }
            else {
                console.log(data)
                console.log("bienvenido "+ data.response.token )
                localStorage.setItem("token",data.response.token)
            }
            dispatch({
                type: actionType.USER,
                user: data.response
            })
        }
    }

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
                
                <form  onSubmit={logiUser}>
                    <input type="email" className="form-control inputSign bg-dark " placeholder="EMAIL (REQUERIDO)" aria-label="email" />
                    <input type="password" className="form-control inputSign bg-dark" placeholder="PASSWORD (REQUERIDO)" aria-label="email" />
                    <button className="send" type="send">Ingresar</button>
                </form>
            </div>
        </div>
    )
}