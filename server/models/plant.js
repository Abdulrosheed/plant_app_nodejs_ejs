const mongoose = require('mongoose');
const comment = require('./comment');

const plantSchema = new mongoose.Schema({
    name: {
        type : String,
        required:true
    },
    hausaName: {
        type : String,
        required:true
    },
    yorubaName: {
        type : String,
        required:true
    },
    igboName: {
        type : String,
        required:true
    },
    description: {
        type : String,
        required:true
    },
    imagePics: {
        type : String,
        required:true
    },
    imagePics2: {
        type : String,
        required:true
    },
    
    
});
const plantDb = mongoose.model('plantdb' , plantSchema);
module.exports = plantDb;
 
