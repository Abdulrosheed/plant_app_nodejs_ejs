const plantService = require('../services/plantService');
const commentService = require('../services/commentService');
const translate =  require('translate');

const plantServiceClass = new plantService();
const commentServiceClass = new commentService();

exports.create_plant = (req,res) =>{
    res.render('createPlant');
}
exports.create = async (req, res) => {
    if(!req.body )
    {
        res.render('createPlant');
    }
    console.log("req" , req.body)
    const { name,igboName,yorubaName,hausaName,description} = req.body;
    const filenames = req.files.map(file => file.filename);
    const addedPlant = await plantServiceClass.createPlant(name , hausaName , igboName , yorubaName,description,filenames[0],filenames[1]);
    res.redirect('/dashboard');
    
};

exports.plants = async (req, res) => {
    if(req.query.id)
    {
        let name;
        let lang;
        const data = await plantServiceClass.getPlantById(req.query.id);
        const commentData = await commentServiceClass.getCommentByPlantId(req.query.id);
        console.log("data" , commentData)
        if(req.query.name && req.query.lang)
        {
            name = req.query.name;
            lang = req.query.lang;
        }
        else
        {
            name = data.name;
        }
        res.render('plantdetails' , {data:data , commentData : commentData , name:name , lang:lang });
    }
    else
    {
        const data =  await plantServiceClass.listAllPlants();
        console.log("data" , data)
        res.render('allPlants' , {data : data});
    }
    
};
exports.delete = async(req,res) =>
{
    await plantServiceClass.deletePlant(req.params.id);
    res.redirect('/plants');
}
exports.update_plant = async (req,res) =>{
    console.log("params" , req.params.id);
    const data = await plantServiceClass.getPlantById(req.params.id);
    console.log("data" , data);
    res.render('updatePlant' , {data : data});
}
exports.update = async(req,res) =>
{
    if(!(req.params.id && req.body) )
    {
        res.render('updatePlant');
    }
    const { name,igboName,yorubaName,hausaName,description} = req.body;
    await plantServiceClass.updatePlant(req.params.id , name , hausaName , igboName , yorubaName , description);
    res.redirect('/plants');
}
exports.getPlantByLanguage = async(req,res) =>
{
    const data = await plantServiceClass.getPlantByLanguage(req.query.lang);
    console.log("data2" , data)
    res.send({data : data});
}

