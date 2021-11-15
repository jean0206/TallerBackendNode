const {Router}=require('express');
const route=Router();
const userController=require('../controllers/userController');

route.get('/',userController.read);

route.post('/',userController.create);

route.put('/',userController.update);

route.delete('/',userController.delete);

module.exports=route;