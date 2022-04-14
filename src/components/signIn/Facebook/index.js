import React from "react";
import FacebookLogin from 'react-facebook-login';
// import './face.css'
// import {TiSocialFacebookCircular} from 'react-icons/lib/ti/social-facebook-circular';
import { TiSocialFacebookCircular } from 'react-icons/ti';

export default function LoginFacebook(params) {
  const responseFacebook = (response) => {
  console.log(response);
}  
    return (
        <div>
            
            <FacebookLogin
                appId="459928229238620"
                autoLoad={false}
                fields="name,email,picture"
                callback={responseFacebook} 
                cssClass="cssface"
                icon={<TiSocialFacebookCircular className="logo"></TiSocialFacebookCircular>}
                textButton={<div>Iniciar sesión con Facebook </div>}
                />
                
        </div>
    )
}