const mongoose= require("mongoose")

const serviciosSchema= new mongoose.Schema({
    nombre:{type:String,require:true},
    descripcion:{type:String,require:true},
    imagen: {type:String,require:true},
    precio: {type:String,require:true},
    
})

const Servicio= mongoose.model("servicios",serviciosSchema)

module.exports= Servicio;