const commentService = require('../services/commentService');

const commentServiceClass = new commentService()

exports.create = async (req, res) => {
    console.log("body" , req.body)
    const { comment , name , email } = req.body;
    const addedComment = await commentServiceClass.createComment(req.query.plantId , comment , name,email);
    res.status(200).send(JSON.stringify({message : "Created sucessfully"}));
    
};