import React from "react";
import FacebookLogin from 'react-facebook-login';
import './face.css'
import axios from "axios";
import { actionType } from "../../../reducer";
import { useStateValue } from "../../../StateProvider"
// import {TiSocialFacebookCircular} from 'react-icons/lib/ti/social-facebook-circular';
import { TiSocialFacebookCircular } from 'react-icons/ti';
import swal from 'sweetalert';
export default function LoginFacebook(params) {

    const [{ user }, dispatch] = useStateValue()

    const responseFacebook = async (response) => {
        console.log(response);
        const userData = {
            email: response.email,
            password: response.id+"aA"
        }
        await axios.post("https://css-estilos.herokuapp.com/api/signin", { userData })
            .then(response => {
                console.log("face conect");
                console.log(response.data);
                displayMessages(response.data)
                
            })
            function displayMessages(data) {
                if (!data.success) {
                    console.log(alert(data.error))
                }
                else {
    
                    localStorage.setItem("token", data.response.token)
                    swal({
                        title: "Welcome",
                        text: data.response.firstname + " " + data.response.lastname,
                        icon: "success",
    
                    });
                }
    
                dispatch({
                    type: actionType.USER,
                    user: data.response
                })
            } 
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
                textButton={<div className="content-face">Iniciar sesión con Facebook </div>}
                />
                
        </div>
    )
}