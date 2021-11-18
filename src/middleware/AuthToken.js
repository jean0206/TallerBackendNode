
const jwt = require('jsonwebtoken');


const generateToken = (user) => {
    return jwt.sign({user}, 'PrivateKey', {expiresIn:15*60})
}

const decodeToken = (token) => {
    return jwt.verify(token, 'PrivateKey');
}

const verifyToken =  (req,res,next) => {
    try{
        console.log('Entra aqui')
        const token = req.headers['x-access-token'];
        console.log("TOKEN:"+token)
        if(!token){
            return res.status(401).send({auth:false,message: 'No token provide'})
        }
        const decode = jwt.verify(token,'PrivateKey');
        req.body.owner = decode.user.id
        console.log(decode)
        next()
    }catch (error) {
        console.log(error.name)
        if(error.name === 'TokenExpiredError' ){
            res.send({auth:false,message: 'Token expired'}).status(401)
        }else{
            res.send({auth:false,message: error.message}).status(401)
        }
    }
}



module.exports = {generateToken,verifyToken}