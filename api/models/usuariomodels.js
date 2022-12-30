var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var usuarioSchema = new Schema({
    nombre:{
        type: String,
        required: [true,"EL NOMBRE ES REQUERIDO"]
    },
    apellido:{
        type: String,
        required: true
    },
   telefono :{
        type: String,
        required: false
    },
    nombre:{
        type: String,
        required: true
    },
    correo:{
        type: String,
        required: true
    },
    usuario:{
        type: String,
        required: true
    },
    clave:{
        type: String,
        required: true
    },
    clave:{
        type: String,
        require: true
    },
    estado :{
        type: Boolean,
        required: false,
        default: true
    },
    created_at:{
        type: Date,
        default: Date.now
    },



});
module.exports = mongoose.model('Usuario', usuarioSchema);
