const {MongoClient} = require('mongodb');
const uri = "mongodb+srv://victorDemo:wikiwiki@cluster0.6v3xo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri);
const userCtrl={}
//const User = require('../model/User');
class User {
    constructor(name, username, identification, password, photo){
        this.name=name;
        this.username=username;
        this.identification=identification;
        this.password=password;
        this.photo=photo;
    }
}


//Create documents
async function createUser(client, newUser){
    const result = await client.db("usersNnotes").collection("Users").insertOne(newUser);
    console.log(`New User Inserted With ID: ${result.insertedId}`);
}

userCtrl.read=(req,res)=>{
    res.send('getting users')
}

userCtrl.create = async (req,res)=>{
    console.log(`**********${req.body}**********`);
    const {name, username, identification, password, photo} = req.body;
    const newUser= new User(name,username,identification,password,photo);
    try{
        await client.connect();
        await createUser(client, newUser);
    }catch(e){
        console.error(e);
    }finally{
        await client.close();
    }
}

userCtrl.update=(req,res)=>{
    res.send('updating users')
}

userCtrl.delete=(req,res)=>{
    res.send('deleting users')
}

module.exports=userCtrl;