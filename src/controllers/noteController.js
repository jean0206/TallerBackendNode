const {MongoClient} = require('mongodb');
const uri = "mongodb+srv://victorDemo:wikiwiki@cluster0.6v3xo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri);
const noteCtrl={}

noteCtrl.read=(req,res)=>{
    res.send('getting notes')
}

noteCtrl.create= async (req,res)=>{
    res.send('creating notes')
}

noteCtrl.update=(req,res)=>{
    res.send('updating notes')
}

noteCtrl.delete=(req,res)=>{
    res.send('deleting notes')
}

module.exports=noteCtrl;
