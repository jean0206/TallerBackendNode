const loginCtrl = {}
const {generateToken} = require('../middleware/AuthToken')
const User = require('../model/User')

loginCtrl.login= async (req,res)=>{
    const {username,password} = req.body
    try {
        const userFind = await User.findOne({username:username,password:password})
        console.log(userFind)
        if(userFind){
            const token = generateToken({
                name: userFind.name,
                id: userFind._id,
                identification: userFind.identification
            })

            res.send({token:token})
        }
        console.log(generateToken('HOLA'))
    } catch (error) {
        res.send({message:error.message})      
    }
  
}

module.exports=loginCtrl;