const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required: true
    },
    lastname: {
        type:String,
        required:true
    },
    username: {
        type: String,
        required: true,
        minlength:[8,'El nombre de usuario debe ser minimo de 8 caracteres'],
        unique: true
    },
    identification:{
        type: Number,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    photo: {
        type: String
    }
})

module.exports = mongoose.model('user',userSchema)
