const multer = require('multer');
const express = require('express');
const controller = require('../controllers/plantController');

const route = express.Router();

// Define the storage function
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'assets/images/');
    },
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      cb(null, file.fieldname + '-' + uniqueSuffix + '.jpg');
    }
  });
const upload = multer({ storage: storage });

route.get('/plant/create' , controller.create_plant);
route.post('/plant/create' , upload.array('photos') , controller.create);
route.get('/plants' , controller.plants);
route.get('/plant/delete/:id' , controller.delete);
route.get('/plant/getPlantbyLanguage' , controller.getPlantByLanguage);
route.get('/plant/update/:id' , controller.update_plant);
route.post('/plant/update/:id' , controller.update);

module.exports = route;
