import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import studentRoutes from './routes/student.js'

const app = express();


app.use(bodyParser.json({limit: "20mb", extended:true}));  //extended true sets so everything goes thru body parser
app.use(bodyParser.urlencoded({limit: "20mb", extended:true}));

app.use(cors());
app.use('/students', studentRoutes);

const CONNECTION_URL = 'mongodb+srv://leonel:lrp@cluster0.avcca.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';


const PORT = process.env.PORT || 5000;  //Either choose port enviornemnt we created or 5000

//If promise goes thru, .then sends succesful connection message to console // otherwise .catch sends error message to console
mongoose.connect(CONNECTION_URL, {
    useNewUrlParser:true, useUnifiedTopology:true  //Keep them both true to avoid warning and errors in the console
}).then(() => app.listen(PORT, () =>
console.log('Connection is established and running on port: '+ PORT )
)).catch((err) => console.log(err.message));





