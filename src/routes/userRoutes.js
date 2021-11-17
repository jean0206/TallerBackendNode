const {Router}=require('express');
const route=Router();
const userController=require('../controllers/userController');

route.get('/:id',userController.read);

route.post('/',userController.create);

route.put('/:id',userController.update);

route.delete('/:id',userController.delete);

module.exports=route;