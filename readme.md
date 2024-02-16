# Démo 03

## Rappel de la structure
### Arboréscence 
```
- controller
- models
- views
- public
- middleware

app.js
```

- Fichier app.js <br>
*Creer et configurer le serveur exrpress*

- Dossier "controllers" <br>
*Réaliser le traitement de la requete (générer une réponse...)*


- Dossier "models" <br>
*Couche pour permettre l'acces aux données (db, fichiers, ...)*

- Dossiers "views" <br>
*Construire l'interface*

- Dossier "Routes" <br>
*Permet d"utiliser le controller adapté en fonction de l'url*

- Dossier "Middleware" <br>
*Centralise les middlewares customs (injecter de la logique avant d'atteindre le controller)*

- Dossier "public" <br>
*Rendre accessible des fichiers sans passer par le routing*

### Objectifs
- Séparation de la responsabilité
- Maintenabilité plus simple


### Initialisation 
```
npm init
```
### Initialisation - Installation des dépendances
```
npm i express ejs dotenv (npm install)
npm nodemon
```
### Fichier package.json
*Customiser le fichier si nécessaire(api, funding, etc, )* 
```
  "scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js",}
  "engines": {
    "node": ">=18"
  },
    "devDependencies": {
    "nodemon": "^3.0.3"
  }
```

### Git init
#### Commandes :
```
git init
```
- Ajout de fichier .gitignore
- initialiser avec git init
- git commit git add . 

### Création des dossiers Controllers, Routes, Views, Public

### Controller *Exemple liste de personne, detail d'une personne*
```

```