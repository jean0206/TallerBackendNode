const express =require('express');
const app = express();
const morgan = require('morgan');
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

//start server
app.listen(app.get('Port'), ()=>{
    console.log(`Listening on port ${app.get('Port')}`);
});

const {MongoClient} = require('mongodb');
const uri = "mongodb+srv://victorDemo:wikiwiki@cluster0.6v3xo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri);
