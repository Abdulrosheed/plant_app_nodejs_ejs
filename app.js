const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path = require('path');
const cors = require('cors');
const session = require('express-session')
const connectDb = require('./server/database/applicationContext');
const plantRouter = require('./server/routers/plantRouter');
const commentRouter = require('./server/routers/commentRouter');
const userRouter = require('./server/routers/userRouter');

//specifies this app is an express file
const app = express();

//it gets the config file that has env variable
dotenv.config({path : 'config.env'})

//specifies the port that the app will use 
const port = process.env.PORT || 8080

//Used to log request in our application
app.use(morgan('tiny'));

// connect to mongodb
connectDb();

//Used to parse request to js objects
app.use(bodyparser.urlencoded({extended : true}));

// enable cors
app.use(cors());
app.options('*', cors());

app.use(plantRouter);
app.use(commentRouter);
app.use(userRouter);



app.use(session({
    saveUninitialized: true,
    secret: '123456',
    resave: true
}));

app.set("view engine" , "ejs");

//Can use this to specify the path where ejs files are located if not oinside the views folder
//app.set("views" , path.resolve(__dirname , "views"));

//sets the path where static files are located
app.use(express.static(__dirname + '/assets'));



//specify the port the app will be listening on
app.listen(port , () => console.log(`Server is running at port http://localhost:${port}`));