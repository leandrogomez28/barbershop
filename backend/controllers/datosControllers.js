
const Barberos = require("../models/barberos.js");

const Servicios = require("../models/servicios.js")

const Productos = require('../models/productos.js');
const Barbero = require("../models/barberos.js");





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

    },

    ObtenerProductos: async (req, res) => {
        let productos
        let error = null
        try {

            productos = await Productos.find()

        } catch (err) {
            error = err
            console.log(error)
        }
        res.json({
            response:error?"ERROR":{productos},
            success:error ? false:true,
            error:error

        })

    },
    likeDislike:async(req,res)=>{
        const id=req.params.id;
        const user=req.user.id
        let barberos
        console.log(id)
        console.log(user)
        

        try {
           barberos= await Barbero.findOne({_id:id})
            if(barberos.likes.includes(user)){

                Barbero.findByIdAndUpdate({_id:id},{$pull:{likes:user}},{new:true})
                .then(response=>res.json({success:true,response:response.likes}))
                .catch(error=>console.log(error))
            }
            else{
                Barbero.findByIdAndUpdate({_id:id},{$push:{likes:user}},{new:true})
                .then(response=>res.json({success:true,response:response.likes}))
                .catch(error=>console.log(error))
            }
        } catch (err) {
            error=err
            res.json({success:false,resposne:error})
            
        }


        
    }

   
    }

module.exports= barberosController