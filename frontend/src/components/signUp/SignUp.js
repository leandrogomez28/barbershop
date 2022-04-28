import React from "react";
import './signup.css';
// import { Link as LinkRouter } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';
import { FaPaperPlane } from 'react-icons/fa';
import { FaLock } from 'react-icons/fa';
import { FaCheck } from 'react-icons/fa';
import axios from "axios";
import swal from 'sweetalert';

// import Google from "../components/signUpGoogle";
// import Facebook from "../components/signUpFacebook";
import Facebook from "./Facebook/index"
import Google from "./Google/index"


function SignUp() {


	async function newUser(event) {
		event.preventDefault()

		const newUser = {
			firstname: event.target[0].value,
			lastname: event.target[1].value,
			email: event.target[2].value,
			password: event.target[3].value,
			from: "signup"
		}
		console.log(event);


		await axios.post("https://css-estilos.herokuapp.com/api/signup", { newUser })
			.then(response => {
				console.log(response);
				if (response.data.success === "falseVAL") {

					let detailsError = response.data.response.error.details
					console.log(detailsError)
					detailsError.map(error =>
						swal({

							title: "error",
							icon: "error",
							text: error.message,
							buttons: "ok"
						})

					)
				}
				else if (response.data.success === "trueUE") {
					console.log(response.data)
				}

				else {
					swal({
						title: "check your Email",
						icon: "success",
						text: response.data.response,
						buttons: "ok"
					})
				}


			})

	}

	return (


		<div>

			<div className="generals-signUp">

				<div className="izquierda-signUp">
					{/* <img src="https://shaver.freevision.me/wp-content/uploads/2016/06/shutterstock_296116106-compressor.jpg"></img> */}
				</div>

				<div className="derecha-signUp">
					<div className="cabeza-titulo">
						<h1 className="h1">CCS.ESTILOS</h1>
						<h4>Registro</h4></div>
					<div className="mb-2">
						<Facebook />
					</div>
					<div>
						<Google />
					</div>
					<div className="sign">
						<hr className="hr1"></hr>
						<span>or</span>
						<hr className="hr2"></hr>
					</div>

					<form onSubmit={newUser}>
						<input type="text" className="form-control inputSign bg-dark" placeholder="NOMBRE (Requerido)" />
						<input type="text" className="form-control inputSign bg-dark" placeholder="APELLIDO (Requerido)" />
						<input type="email" className="form-control inputSign bg-dark " placeholder="EMAIL (Requerido)" />
						<input type="password" className="form-control inputSign bg-dark" placeholder="PASSWORD (Requerido)" />

						<button className="send" type="send">Registrarse</button>
					</form>
				</div>

			</div>
		</div>

	)


}

export default SignUp;