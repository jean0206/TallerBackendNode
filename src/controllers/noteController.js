const noteCtrl={}

noteCtrl.read=(req,res)=>{
    res.send('getting notes')
}

noteCtrl.create=(req,res)=>{
    res.send('creating notes')
}

noteCtrl.update=(req,res)=>{
    res.send('updating notes')
}

noteCtrl.delete=(req,res)=>{
    res.send('deleting notes')
}

module.exports=noteCtrl;