const mongoose = require('mongoose');

const connectionString = async () =>
{

    mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to database!');
    })
  .catch((error) => {
        console.log('Error connecting to database: ', error);
  });
    
}

module.exports = connectionString;