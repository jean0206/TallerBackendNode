const {MongoClient} = require('mongodb');
const uri = "mongodb+srv://victorDemo:wikiwiki@cluster0.6v3xo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri);
const userCtrl={}
const User = require('../model/User')
//const User = require('../model/User');
/* class User {
    constructor(name, username, identification, password, photo){
        this.name=name;
        this.username=username;
        this.identification=identification;
        this.password=password;
        this.photo=photo;
    }
} */


//Create documents
async function createUser(client, newUser){
    const result = await client.db("usersNnotes").collection("Users").insertOne(newUser);
    console.log(`New User Inserted With ID: ${result.insertedId}`);
}

userCtrl.read= async(req,res)=>{
    const {id} = req.params 
    try {
        const user = await User.findById(id)
        res.send({...user._doc})
    } catch (error) {
        res.send({message:'Error buscando al usuario'})
    }
    res.send('getting users')
}

userCtrl.create = async (req,res)=>{
    console.log(`**********${req.body}**********`);
    const {firstname,lastname, username, identification, password, photo} = req.body;
    const newUser= new User({firstname,lastname,username,identification,password,photo});
    try{
        const userSaved = await newUser.save()
        res.json({message:`El usuario fue añadido correctamente con el id ${userSaved._id}`})
    }catch(e){
        res.json({message:`Error ${e.message}`})
    }finally{
        await client.close();
    }
}

userCtrl.update= async (req,res)=>{
    const {id} = req.params;
    const {firstname,lastname, username, identification, password, photo} = req.body;
    try {
        const UserFind = await User.findById(id)
        if(UserFind) {
            UserFind.firstname = firstname || UserFind.firstname
            UserFind.lastname = lastname || UserFind.lastname
            UserFind.username = username || UserFind.username
            UserFind.identification = identification || UserFind.identification
            UserFind.password = password || UserFind.password
            UserFind.photo = photo || UserFind.photo

            const UserSaved = await UserFind.save()
            res.json({message:`El usuario fue editado correctamente con el id ${UserSaved._id}`})
        }
        else {
            res.json({message:'No se ha encontrado ningun usuario con ese Id'})
        }
        res.send({user:UserFind.id})
    } catch (error) {
        res.send({error:error.message})
    }
    res.send('updating users')
}

userCtrl.delete= async (req,res)=>{
    const {id} = req.params
    try {
        const response = await User.deleteOne({_id:id})
        res.send({message:'Se ha eliminado el usuario'})    
    } catch (error) {
        res.send({error:error.message})
    }
    
}

module.exports=userCtrl;