const userService = require('../services/userService');
const session = require('express-session');

const userServiceClass = new userService()

exports.create_user = (req,res) =>{
    res.render('registerUser');
}
exports.create = async (req, res) => {
    const { firstName, lastName , email,passWord,phoneNumber } = req.body;
    if(!req.body)
    {
        res.render('registerUser');
    }
    const name = firstName + " " + lastName;
    
    const addedUser = await userServiceClass.createUser(name,email,passWord,phoneNumber);
    res.redirect('/user/login');
    
};
exports.login_user = (req,res) =>{
    res.render('login');
}
exports.login = async (req,res) =>
{
   console.log("req" , req.body);
    const {email, passWord} = req.body;
    const user = await userServiceClass.getUserByEmailAndPassword(email,passWord);
    console.log("user" , user)
    if(!user)
    {
        res.render('login')
    }
    else
    {
        res.redirect('/dashboard');

    }
}
exports.dashboard = async (req,res) =>
{
    
    res.render('adminDashboard');
   
    
}
exports.logout =  (req,res) =>
{
    req.session.destroy((err) => {
        if (err) {
          console.log(err);
        } else {
          res.redirect('home');
        }
    })
}
exports.home =  (req,res) =>
{
    res.render('index')
}
