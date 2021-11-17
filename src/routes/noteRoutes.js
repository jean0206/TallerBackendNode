const {Router}=require('express');
const route=Router();
const noteController=require('../controllers/noteController');

route.get('/:id',noteController.read);

route.post('/',noteController.create);

route.put('/:id',noteController.update);

route.delete('/:id',noteController.delete);

module.exports=route;