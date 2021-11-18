const {Router}=require('express');
const route=Router();
const noteController=require('../controllers/noteController');
const {verifyToken} = require('../middleware/AuthToken')

route.get('/:id',noteController.read);

route.post('/',verifyToken,noteController.create);

route.put('/:id',noteController.update);

route.delete('/:id',noteController.delete);

module.exports=route;