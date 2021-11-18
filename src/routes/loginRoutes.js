const {Router}=require('express');
const route=Router();
const loginController=require('../controllers/loginController');

route.post('/',loginController.login);


module.exports=route;