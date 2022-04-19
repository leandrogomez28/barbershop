import React from "react";
import GoogleLogin from 'react-google-login';
import './google.css'

export default function LoginGoogle (params) {
    const responseGoogle = (response) => {
        console.log(response);
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