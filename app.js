// Charger les variables d"env (Compatible node v18+)
require('dotenv').config();

// Les imports
const express = require('express');
const homeRouter = require('./routes/home.router');
const personRouter = require('./routes/person.router');

// Creation du web serveur
const app = express();

// Configuration du moteur de vue
app.set('view engine', 'ejs');
app.set('views', './views');

// Middlewares
app.use(express.urlencoded({extended: true}));

// Routing
app.use(homeRouter);
app.use(personRouter);

// Lancer le serveur
const {PORT, NODE_ENV} = process.env;
app.listen(PORT, () => {
    console.log(`Web server listening on port ${PORT} (${NODE_ENV})`);
});

