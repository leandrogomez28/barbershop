import React from "react";
import { useStateValue } from "../../StateProvider";
import axios from "axios";
import { actionType } from "../../reducer";

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
                !user ?<div className="nav-link active hover-underline-animation" aria-current="page" >Sing In </div>:
                <div className="nav-link active hover-underline-animation" aria-current="page" onClick={cerrarSesion}>Sing Out </div>
            }

        </div>
    )
}