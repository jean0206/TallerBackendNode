const testCtrl={}

testCtrl.read=(req,res)=>{
    res.send('getting')
}

testCtrl.create=(req,res)=>{
    res.send('creating')
}

testCtrl.update=(req,res)=>{
    res.send('updating')
}

testCtrl.delete=(req,res)=>{
    res.send('deleting')
}

module.exports=testCtrl;