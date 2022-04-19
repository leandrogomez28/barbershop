import React from "react";
import { useStateValue } from "../../StateProvider";
import axios from "axios";
import { actionType } from "../../reducer";
import {FaUserCircle} from 'react-icons/fa'
import './logo.css'
import Logo from '../../imagenes/logout.png'

export default function IconLogeo(params) {
    const [{ user }, dispatch] = useStateValue()

    async function cerrarSesion() {
        console.log(user.email);
        const email = user.email
        // const email = user.datosUser.email
        // console.log(email)
        
        await axios.post("http://localhost:4000/api/signout", {email} )
            .then(response => {
                console.log(response.data.response);
                localStorage.removeItem("token")
                dispatch({
                    type:actionType.USER,
                    user:null
                })
            })
    }

    return (
        <div>

            {/* <div className="nav-link active hover-underline-animation" aria-current="page" to="/singIn">Sing In </div>
            <div className="nav-link active hover-underline-animation" aria-current="page" to="/singIn">Sing Out </div> */}

            {
                !user ?<div className="nav-link active hover-underline-animation" aria-current="page" ><FaUserCircle/></div>:
                <div className="nav-link active hover-underline-animation logueado" aria-current="page" onClick={cerrarSesion}><img src={Logo}/> </div>
            }

        </div>
    )
}