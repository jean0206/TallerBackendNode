const {Router}=require('express');
const route=Router();
const noteController=require('../controllers/noteController');

route.get('/',noteController.read);

route.post('/',noteController.create);

route.put('/',noteController.update);

route.delete('/',noteController.delete);

module.exports=route;