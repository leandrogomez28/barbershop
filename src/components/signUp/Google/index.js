import React from "react";
import GoogleLogin from 'react-google-login';
import './google.css'
import axios from "axios";

export default function LoginGoogle (params) {

    const responseGoogle = async(response) => {
        console.log(response)
        const newUser = {
            firstname:response.profileObj.givenName,
            lastname:response.profileObj.familyName,
            email:response.profileObj.email,
            password:response.googleId+"aA",
            from:"Google"
        }
        
        await axios.post("http://localhost:4000/api/signup", { newUser })
        
            .then(response => {
                console.log(response)
            })
        
      }
      
    return(
        <div>
            <GoogleLogin
                    clientId="980767122625-br7nbpiqggtu3jf3ihffpknho9almh85.apps.googleusercontent.com"
                    buttonText="Registrarse con Google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                    className="botongoogle"
                />
        </div>
    )
}