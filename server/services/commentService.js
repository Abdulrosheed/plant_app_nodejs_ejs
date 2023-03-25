const commentModel = require('../models/comment');

class CommentService {

    async createComment(plantId,comment,name,email)
    {
        const newComment = new commentModel({
            plantId : plantId,
            comment : comment,
            name :name,
            email:email
        });
        newComment.save()
        .then(() => {
            return "Sucessfully created a comment"
        })
        .catch((error) => {
        console.log('Error creating comment: ', error);
      });
    }
    async getCommentByPlantId(plantId)
    {
        return  await commentModel.find({plantId:plantId});

    }
    
}
module.exports = CommentService;