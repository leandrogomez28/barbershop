const mongoose= require("mongoose")

const barberosSchema= new mongoose.Schema({

    nombre:{type:String,require:true},
    apellido:{type:String,require:true},
    especialidad: {type:String,require:true},
    reseña: {type:String,require:true},
    img: {type:String,require:true},
    likes:{type:Array}
    
})

const Barbero= mongoose.model("barberos",barberosSchema)

module.exports= Barbero;