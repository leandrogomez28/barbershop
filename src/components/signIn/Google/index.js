import React from "react";
import GoogleLogin from 'react-google-login';
import './google.css'
import axios from "axios";
import { actionType } from "../../../reducer";
import { useStateValue } from "../../../StateProvider"

export default function LoginGoogle (params) {

    const [{ user }, dispatch] = useStateValue()
    
      const responseGoogle = async (response) => {
        console.log(response);
        const userData = {
            email: response.profileObj.email,
            password: response.googleId+"aA" ,
        }
        await axios.post("http://localhost:4000/api/signin", { userData })
            .then(response => {
                console.log("face conect");
                console.log(response.data);
                displayMessages(response.data)
                
            })
        function displayMessages(data) {
            

            if (!data.success) {
                console.log(data.error)
            }
            else {
                console.log(data.response);
                localStorage.setItem("token",data.response.token)
            }
             dispatch({
                type: actionType.USER,
                user: data.response
            })
        }  
    }
    return(
        <div>
            <GoogleLogin
                    clientId="980767122625-br7nbpiqggtu3jf3ihffpknho9almh85.apps.googleusercontent.com"
                    buttonText="Iniciar sesión con Google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                    className="botongoogle"
                />
        </div>
    )
}