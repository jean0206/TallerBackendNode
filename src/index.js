const express =require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose')
const cors = require('cors');
const bodyParser = require('body-parser');

app.set('Port', 4000);

app.use(morgan('dev'));
/*app.use(bodyParser.urlEncoded({
    extended: true;
}));*/
//app.use(bodyParser.json());

//Routes
app.use(express.json());
app.use('/api/', require('./routes/test.route'));
app.use('/users/', require('./routes/userRoutes'));
app.use('/notes/', require('./routes/noteRoutes'));



const {MongoClient} = require('mongodb');
const uri = "mongodb+srv://enviamosya:02060206@cluster0-pd5wm.mongodb.net/tallernode?retryWrites=true&w=majority";
const client = new MongoClient(uri);

mongoose.connect(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });

//start server
app.listen(app.get('Port'), ()=>{
    console.log(`Listening on port ${app.get('Port')}`);
});

