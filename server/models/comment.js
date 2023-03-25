const mongoose = require('mongoose');
const plant = require('./plant')

const commentSchema = new mongoose.Schema({
    comment: {
        type : String,
        required:true
    },
    name: {
        type : String,
        required:true
    },
    email: {
        type : String,
        required:true
    },
    plantId: {
        type : mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'plant'
    }

    
});
 const commentDb = mongoose.model('commentdb' , commentSchema);
 module.exports = commentDb;