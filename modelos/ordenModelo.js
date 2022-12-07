const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const ordModel = new Schema(
    {
        fecha: {
            type: Date,
            required: true,
        },
        hora: {
            type: Number,
            required: true 
        },
    
        ancho: {
            type: Number,
            required: true 
        },
    
        largo: {
            type: Number,
            required: true 
        },
    
        alto: {
            type: Number,
            required: true 
        },
    
        peso: {
            type: Number,
            required: true 
        },
    
        direccionRecogida: {
            type: String,
            required: true 
        },
    
    
        ciudadRecogida: {
            type: String,
            required: true 
        },
    
        nombreDestinatario: {
            type: String,
            required: true 
        },
    
        cedulaDestinatario: {
            type: Number,
            required: true 
        },
    
        direccionEntrega: {
            type: String,
            required: true 
        },
    
        ciudadEntrega: {
            type: String,
            required: true
        }
    }
)

module.exports = mongoose.model("ordenes", ordModel)