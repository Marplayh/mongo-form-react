const mongoose = require('mongoose');

async function main(){
    try{
        mongoose.set("strictQuery", true);
       await mongoose.connect('mongodb+srv://marciobrrj22:5nchPlzNO1M4CDep@cluster0.2lzahcw.mongodb.net/?retryWrites=true&w=majority')
       console.log('conectado!')
    } catch(error){
        console.log(`Erro: ${error}`)
    }
}    
module.exports = main;