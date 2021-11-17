const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema({
    title:{
        type:String,
        required: true
    },
    comment: {
        type:String,
        required:true
    },
    owner: {
        type:String,
        required:true
    }
})

module.exports = mongoose.model('notes',noteSchema)