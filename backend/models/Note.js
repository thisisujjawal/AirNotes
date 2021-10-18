const mongoose = require('mongoose');

const notesScheme = new mongoose.Schema({
    author : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'user'
    },
    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    date : {
        type : Date,
        default : Date.now
    },
});

module.exports = mongoose.model('notes' , notesScheme); 