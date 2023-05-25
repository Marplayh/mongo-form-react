const mongoose = require('mongoose');

const {Schema} = mongoose;

const clienteSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    data_nascimento: {
        type: Date,
        required: true
    },
    sexo:{
        type: String,
        required: true
    },
    raca: {
        type: String,
        required: true
    }
}, 
{timestamps: true}
)

const Cliente = mongoose.model("Cliente", clienteSchema)

module.exports = {
    Cliente,
    clienteSchema
}