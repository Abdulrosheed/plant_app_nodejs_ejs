const userModel = require('../models/user');

class UserService {

    async createUser(name,email,passWord,phoneNumber)
    {
        const newUser = new userModel({
            name : name,
            email : email,
            passWord : passWord,
            phoneNumber : phoneNumber,
        
        });
        newUser.save()
        .then(() => {
            return "Sucessfully created a user"
        })
        .catch((error) => {
        console.log('Error creating user: ', error);
      });
    }
    async getUserByEmailAndPassword(email , passWord)
    {
       return await userModel.findOne({ email: email, passWord: passWord })
        
    }
    
}
module.exports = UserService;