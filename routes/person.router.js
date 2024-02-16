const personController = require('../controllers/person.controller');

// Créer le router pour la zone "person"
const personRouter = require('express').Router();


// Definition de(s) routes
personRouter.get('/person', personController.list);
personRouter.get('/person/:id', personController.detail);

//Export le personRouter;
module.exports = personRouter;