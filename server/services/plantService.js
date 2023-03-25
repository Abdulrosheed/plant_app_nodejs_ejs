const plantModel = require('../models/plant');

class PlantService {

    async createPlant(name,hausaName,igboName,yorubaName,description,imagePics,imagePics2)
    {
        const newPlant = new plantModel({
            name : name,
            hausaName : hausaName,
            igboName : igboName,
            yorubaName : yorubaName,
            description : description,
            imagePics: imagePics,
            imagePics2:imagePics2
        });
        newPlant.save()
        .then(() => {
            return "Sucessfully created a plant"
        })
        .catch((error) => {
        console.log('Error creating plant: ', error);
      });
    }
    async listAllPlants()
    {
       return  await plantModel.find().setOptions({ bufferTimeoutMS: 50000 });
        
    }
    async updatePlant(id,name,hausaName,igboName,yorubaName,description)
    {
        const data = {
            name:name,
            hausaName:hausaName,
            igboName:igboName,
            yorubaName:yorubaName,
            description:description 
        };
        return plantModel.findByIdAndUpdate(id,data,{ new: true });
        
    }
    async deletePlant(id)
    {
        plantModel.findByIdAndDelete(id)
        .then(task => {
            console.log("Object was deleted sucessfully");
        })
        .catch(err => {
            console.error(err);
        });
    }
    async getPlantById(id)
    {
        return  plantModel.findById(id).setOptions({ bufferTimeoutMS: 50000 }).exec();
        
    }
    async getPlantByLanguage(language)
    {
        if(language === "Yoruba")
        {
            return   plantModel.find().select('yorubaName _id').setOptions({ bufferTimeoutMS: 50000 });

        }
        else if(language === "Hausa")
        {
            return   plantModel.find().select('hausaName _id').setOptions({ bufferTimeoutMS: 50000 });

        }
        else if(language === "English")
        {
            return  plantModel.find().select('name _id').setOptions({ bufferTimeoutMS: 50000 });

        }
        else if(language === "Igbo")
        {
            return  plantModel.find().select('igboName _id').setOptions({ bufferTimeoutMS: 50000 });

        }

    }
    
}
module.exports = PlantService;