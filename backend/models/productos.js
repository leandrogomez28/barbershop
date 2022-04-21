const mongoose= require("mongoose")

const productosSchema= new mongoose.Schema({
    nombre:{type:String,require:true},
    descripcion:{type:String,require:true},
    imagen: {type:String,require:true},
    precio: {type:String,require:true},
    
})

const Producto= mongoose.model("productos",productosSchema)

module.exports= Producto;