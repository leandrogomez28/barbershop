import React from "react";
import { useStateValue } from "../../StateProvider";
import axios from "axios";
import { actionType } from "../../reducer";
import {RiUserShared2Fill} from 'react-icons/ri'
import {ImUserPlus} from 'react-icons/im'
import './logo.css'
import Logo from '../../imagenes/logout.png'
import { Link as LinkRouter } from 'react-router-dom';

function Deslogueo(params) {
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
                !user ?<div className="nav-link active hover-underline-animation" aria-current="page" >
                    <LinkRouter to='/signin' className="nav-link-signin">
                     <RiUserShared2Fill></RiUserShared2Fill>
                </LinkRouter>
                </div>
                :
                <div className="nav-link active hover-underline-animation " aria-current="page" onClick={cerrarSesion}><img className="logueado" src={Logo}/> </div>
            }

        </div>
    )
}
export default Deslogueo;