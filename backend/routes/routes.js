const Router= require("express").Router();

const barberosController = require("../controllers/datosControllers");
const {ObtenerServicios,ObtenerDatos}= barberosController

const usersControllers=require("../controllers/usersControllers") 
const {newUser,verifyEmail,accesoUsuario,cerrarSesion,verificarToken}=usersControllers 

const validator=require("../controllers/validator") 



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



module.exports = Router