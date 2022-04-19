const mongoose= require("mongoose")

const barberosSchema= new mongoose.Schema({

    nombre:{type:String,require:true},
    apellido:{type:String,require:true},
    
})

const Barbero= mongoose.model("barberos",barberosSchema)

module.exports= Barbero;