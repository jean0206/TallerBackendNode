const {Router}=require('express');
const route=Router();
const testCtrl=require('../controllers/test.controllers');

route.get('/',testCtrl.read);

route.post('/',testCtrl.create);

route.put('/',testCtrl.update);

route.delete('/',testCtrl.delete);

module.exports=route;
