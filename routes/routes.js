const Router= require("express").Router();

const passport=require("../config/passport")

const barberosController = require("../controllers/datosControllers");
const {ObtenerServicios,ObtenerDatos,ObtenerProductos,likeDislike}= barberosController

const usersControllers=require("../controllers/usersControllers") 
const {newUser,verifyEmail,accesoUsuario,cerrarSesion,verificarToken}=usersControllers 

const validator=require("../controllers/validator") 
const comentariosControllers=require("../controllers/comentariosControllers");

const { cargaComentarios,obtenerComentarios,borrarComentario,modificarComentario } = comentariosControllers

Router.route("/productos")
.get(ObtenerProductos) 

Router.route("/servicios")
.get(ObtenerServicios) 

Router.route("/barberos")
.get(ObtenerDatos)

Router.route("/datos")
.get(ObtenerServicios)

Router.route("/signup")
.post(validator,newUser)

Router.route("/verify/:uniqueText")
.get(verifyEmail)

Router.route("/signin")
.post(accesoUsuario)

Router.route("/signout")
.post(cerrarSesion)

Router.route("/coments")
.post(cargaComentarios)

Router.route("/coments/:id")
.get(obtenerComentarios)
.delete(borrarComentario)
.put(modificarComentario)

Router.route("/signintoken")
.get(passport.authenticate("jwt",{session:false}),verificarToken)

Router.route("/likesdislikes/:id")
.put(passport.authenticate("jwt",{session:false}),likeDislike)




module.exports = Router