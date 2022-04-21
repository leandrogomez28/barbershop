import React from "react";
import FacebookLogin from 'react-facebook-login';
import './face.css'
import axios from "axios";
// import {TiSocialFacebookCircular} from 'react-icons/lib/ti/social-facebook-circular';
import { TiSocialFacebookCircular } from 'react-icons/ti';

export default function LoginFacebook(params) {


    const responseFacebook = async (response) => {
        console.log(response);
        console.log(response.name);
        const newUser = {
            firstname: response.name,
            lastname: "facebook",
            email: response.email,
            password: response.id+"aA",
            from: "Facebook"
        }

        await axios.post("http://localhost:4000/api/signup", { newUser })
        
            .then(response => {
                console.log(response)
            })


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
                textButton={<div className="content-face">Registrarse con Facebook </div>}
            />

        </div>
    )
}