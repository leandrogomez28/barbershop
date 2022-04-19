
const Barberos = require("../models/barberos.js");

const Servicios = require("../models/servicios.js")





const barberosController = {
    ObtenerDatos: async (req, res) => {
        let barberos
        let error = null
        try {

            barberos = await Barberos.find()

        } catch (err) {
            error = err
            console.log(error)
        }
        res.json({
            response:error?"ERROR":{barberos},
            success:error ? false:true,
            error:error

        })

    },
    ObtenerServicios: async (req, res) => {
        let servicios
        let error = null
        try {

            servicios = await Servicios.find()

        } catch (err) {
            error = err
            console.log(error)
        }
        res.json({
            response:error?"ERROR":{servicios},
            success:error ? false:true,
            error:error

        })

    }

   
    }

module.exports= barberosController