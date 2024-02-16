const homeController = require('../controllers/home.controller');

//Création de router pour la zone "home"
const homeRouter = require('express').Router();

// Definition de(s) les routes
homeRouter.get('/', homeController.index);


module.exports = homeRouter;



