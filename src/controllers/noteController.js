const {MongoClient} = require('mongodb');
const uri = "mongodb+srv://victorDemo:wikiwiki@cluster0.6v3xo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri);
const noteCtrl={}
const Note = require('../model/Note')
const User = require('../model/User')

noteCtrl.read= async(req,res)=>{
    const {id} = req.params
    try {
        const response = await Note.find({owner:id})
        res.send(response)

    } catch (error) {
        res.send({message:error.message})
    }
    res.send('getting notes')
}

noteCtrl.create= async (req,res)=>{
    const {title,comment,owner} = req.body
    try {
        const userFind = await User.findById(owner)
        if(userFind){
            const newNote = new Note({title,comment,owner})
            const noteSaved = await newNote.save()
            res.send({message:`Se ha añadido la nota con el id ${noteSaved._id}`})
        }else{
            res.send({message:'No se ha encontrado al usuario'})
        }
    } catch (error) {
        res.send({message:error.message})
    }
    res.send('creating notes')
}

noteCtrl.update= async(req,res)=>{
    const {id} = req.params
    const {title,comment,owner} = req.body
    try {
        const NoteFind = await Note.findById(id)
        if(NoteFind.owner!==owner){
            res.send({message:'No tiene permisos de editar esta nota'})
        }
        else if(NoteFind){
            NoteFind.comment = comment || NoteFind.comment
            NoteFind.title = title || NoteFind.title
            const NoteSaved = await NoteFind.save()
            res.send({message:'Se ha editado la nota'})
        }else{
            res.send('Error, No se ha encontrado el usuario')
        }
    } catch (error) {
        res.send({message:error.message})
    }
}

noteCtrl.delete= async (req,res)=>{
    const {id} = req.params
    try {
        const response = await Note.deleteOne({_id:id}) 
        res.send({message:'Se ha eliminado la nota'})
    } catch (error) {
        res.send({message:error.message})
    }
}

module.exports=noteCtrl;
