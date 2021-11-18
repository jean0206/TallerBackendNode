const {Router}=require('express');
const route=Router();
const userController=require('../controllers/userController');
const {verifyToken} = require('../middleware/AuthToken')

route.get('/:id',userController.read);

route.post('/',userController.create);

route.put('/:id',verifyToken,userController.update);

route.delete('/:id',verifyToken,userController.delete);

module.exports=route;