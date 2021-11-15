const userCtrl={}

userCtrl.read=(req,res)=>{
    res.send('getting users')
}

userCtrl.create=(req,res)=>{
    res.send('creating users')
}

userCtrl.update=(req,res)=>{
    res.send('updating users')
}

userCtrl.delete=(req,res)=>{
    res.send('deleting users')
}

module.exports=userCtrl;