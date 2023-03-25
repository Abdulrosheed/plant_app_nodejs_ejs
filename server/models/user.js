const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type : String,
        required:true
    },
    email: {
        type : String,
        required:true
    },
    passWord: {
        type : String,
        required:true
    },
    phoneNumber: {
        type : String,
        required:true
    }
});
const userDb = mongoose.model('userdb' , userSchema);
 module.exports = userDb;